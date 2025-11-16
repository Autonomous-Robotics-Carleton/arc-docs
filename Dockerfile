# --- Base stage: install deps with pnpm ---
FROM node:20-alpine AS deps
WORKDIR /app

# Enable corepack to get pnpm
RUN corepack enable

# Copy lockfile + manifest
COPY package.json pnpm-lock.yaml ./

# Install dependencies (runs postinstall: fumadocs-mdx)
RUN pnpm install --frozen-lockfile

# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

# --- Runtime stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Non-root user
RUN addgroup -g 1001 nodejs \
  && adduser -u 1001 -G nodejs -s /bin/sh -D nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000

CMD ["pnpm", "start"]
