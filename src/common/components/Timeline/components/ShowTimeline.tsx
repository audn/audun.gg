import React from 'react';
import { timeline } from '../../../utils/data/timeline';
import Icon from './Icon';
import Year from './Year';

type Props = {
  year: number;
};

function ShowTimeline({ year }: Props) {
  // @ts-ignore
  const items = Array(...timeline[year]);
  return (
    <>
      <Year year={year} />
      {items.map(({ title, date, brief, last, activity, embed }, i) => (
        <div className="flex" key={i}>
          <div className={'flex items-start'}>
            <div
              className={'flex flex-col h-full justify-start items-center mr-6'}
            >
              <Icon activity={activity} />
              {!last && <div className={'my-4 h-full w-[2px] bg-types-100'} />}
            </div>
            <div className={'pb-16 flex flex-col'}>
              <h2 className={'text-on-hero-900 font-bold text-lg'}>{title}</h2>
              <h5 className={'text-sm text-on-naked-800'}>{date}</h5>
              <h4 className={'mt-3 text-on-naked-900 font-medium max-w-lg'}>
                {brief}
              </h4>
              {embed && embed}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShowTimeline;
