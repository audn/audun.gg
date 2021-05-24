import React from 'react';
import { IQuote } from '../lib/interfaces';

function Quote({ children }: IQuote) {
  return (
    <div className={'md:py-6 md:px-2'}>
      <div
        className={'mt-4 md:mt-0 md:py-4 md:px-8 md:border-l-4 border-hero-50'}
      >
        <div className={'max-w-xl'}>
          <h2 className={'text-lg md:text-2xl font-medium text-on-hero-800'}>
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Quote;
