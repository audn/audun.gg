import React from 'react';
import concat from '../../../utils/helpers/concat';

type Props = {
  activity: string;
};

function Icon({ activity }: Props) {
  const options = (activity: string) => {
    switch (activity) {
      case 'launchedProject':
        return 'bg-activity-launchedProject-100 text-activity-launchedProject-50';
      case 'newJob':
        return 'bg-activity-newJob-100 text-activity-newJob-50';
      case 'planningNewProject':
        return 'bg-activity-planningNewProject-100 text-activity-planningNewProject-50';
      case 'milestone':
        return 'bg-activity-milestone-100 text-activity-milestone-50';
      case 'design':
        return 'bg-activity-design-100 text-activity-design-50';
      case 'education':
        return 'bg-activity-default-100 text-activity-default-50';
      case 'sunsetted':
        return 'bg-activity-sunsetted-100 text-activity-sunsetted-50';
    }
  };

  const iconManager = () => {
    switch (activity) {
      case 'launchedProject':
        return 'bolt';
      case 'newJob':
        return 'briefcase';
      case 'planningNewProject':
        return 'drafting-compass';
      case 'milestone':
        return 'medal';
      case 'design':
        return 'pen-fancy';
      case 'education':
        return 'university';
      case 'sunsetted':
        return 'sunset';
    }
  };
  return (
    <div
      className={concat(
        options(activity),
        'rounded-full flex-shrink-0 h-11 w-11 text-1xl flex items-center justify-center',
      )}
    >
      <i className={concat('fas fa-' + iconManager())} />
    </div>
  );
}

export default Icon;
