import React from 'react';

export const Footer = () => (
  <div className={'mt-12'}>
    <footer className="bg-footer-25">
      <div className="flex items-center font-medium justify-center container py-8 px-4 md:px-8 text-base text-on-footer-900">
        Created by&nbsp;
        <a
          href="https://twitter.com/tweetaudun"
          target="_blank"
          className="font-medium hover:bg-lightpill-150 hover:text-on-lightpill-900 bg-lightpill-100 rounded-lg px-3 py-2 animate text-on-lightpill-800"
        >
          <i className={'fab fa-twitter mr-2 text-blue-400'} />
          tweetaudun
        </a>
      </div>
    </footer>
  </div>
);
