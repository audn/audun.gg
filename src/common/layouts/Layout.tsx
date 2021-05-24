import React from 'react';
import Router from 'next/router';

// import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
import SeoTags from '../components/SeoTags';

import { trackPageview } from '../utils/data/analytics';
import { ILayout } from '../lib/interfaces';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const Layout = ({ title, desc, url, children }: ILayout) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SeoTags title={title && title} desc={desc && desc} url={url} />
      {/*<Header />*/}
      <div className={'flex-1 '}>
        <main className=" w-full text-on-naked-900">{children}</main>
      </div>
      {/*<Footer />*/}
    </div>
  );
};
