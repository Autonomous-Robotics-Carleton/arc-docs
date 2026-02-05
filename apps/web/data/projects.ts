export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    id: 'autonomy-stack',
    title: 'Autonomy Stack',
    description:
      'Full self-driving software pipeline including perception, planning, and control modules for autonomous racing.',
    tags: ['ROS2', 'Python', 'C++'],
  },
  {
    id: 'perception',
    title: 'Perception System',
    description:
      'LiDAR and camera fusion for real-time object detection and track boundary recognition at high speeds.',
    tags: ['Computer Vision', 'LiDAR', 'Deep Learning'],
  },
  {
    id: 'simulator',
    title: 'Racing Simulator',
    description:
      'Custom simulation environment for testing autonomous driving algorithms before deployment on hardware.',
    tags: ['Simulation', 'Unreal Engine', 'ROS2'],
  },
  {
    id: 'vehicle-platform',
    title: 'Vehicle Platform',
    description:
      'Modified 1/10 scale RC car with custom sensor mounts, compute platform, and drive-by-wire system.',
    tags: ['Hardware', 'Embedded', 'CAD'],
  },
];
