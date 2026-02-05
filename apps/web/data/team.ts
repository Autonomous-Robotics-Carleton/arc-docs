export type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

export const teamMembers: TeamMember[] = [
  { name: 'Member One', role: 'Team Lead' },
  { name: 'Member Two', role: 'Software Lead' },
  { name: 'Member Three', role: 'Hardware Lead' },
  { name: 'Member Four', role: 'Perception Lead' },
  { name: 'Member Five', role: 'Controls Lead' },
  { name: 'Member Six', role: 'Design Lead' },
];
