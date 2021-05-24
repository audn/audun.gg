import React from 'react';

function Year({ year }: { year: number }) {
  return (
    <div className={'ml-16 mb-10 flex items-center'}>
      <h2 className={'text-on-hero-900 font-bold text-2xl'}>{year}</h2>
      <div className={'ml-6 h-[2px] bg-types-100 w-96'} />
    </div>
  );
}

export default Year;
