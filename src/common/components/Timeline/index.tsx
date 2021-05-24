import React from 'react';

import ShowTimeline from './components/ShowTimeline';

function Timeline() {
  return (
    <div className={'flex flex-col'}>
      <ShowTimeline year={2021} />
      <ShowTimeline year={2020} />
      <ShowTimeline year={2019} />
      <ShowTimeline year={2018} />
      <ShowTimeline year={2017} />
      <ShowTimeline year={2016} />
    </div>
  );
}

export default Timeline;
