import { ReactNode } from 'react';

export type Navigation = {
  route?: string;
  title: string;
  icon?: ReactNode;
  toggleModal?: () => void;
};

export type TimelineItems = {
  [key: number]: {
    title: string;
    slug?: string;
    date: string;
    last?: boolean;
    brief?: string | ReactNode;
    activity:
      | 'launchedProject'
      | 'newJob'
      | 'planningNewProject'
      | 'milestone'
      | 'born'
      | 'design'
      | 'education'
      | 'sunsetted';
    onClick?: () => void;
    embed?: ReactNode;
  };
};
