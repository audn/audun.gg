import { TimelineItems } from '../../lib/types';

const Embed = {
  discordStyle: () => {
    return (
      <div
        className={
          'px-4 py-4 bg-embed-100 border border-embed-50 rounded-md mt-4'
        }
      >
        <h1 className={'font-bold mb-2 text-lg text-embed-900'}>
          discord.style | Online template library filled with creativity
        </h1>
        Online library for finding and sharing free Discord Templates. Upload
        your own Discord Template and collect votes!
      </div>
    );
  },
  ApexHub: () => {
    return (
      <div
        className={
          'px-4 py-4 bg-embed-100 border border-embed-50 rounded-md mt-4'
        }
      >
        <h1 className={'font-bold mb-2 text-lg text-embed-900'}>
          Apex Hub - The #1 Apex Legends knowledge base
        </h1>
        Introducing Apex-Hub, the best website for finding stats for all the
        weapons and legends in-game
      </div>
    );
  },
  Rocketprices: () => {
    return (
      <div
        className={
          'px-4 py-4 bg-embed-100 border border-embed-50 rounded-md mt-4'
        }
      >
        <h1 className={'font-bold mb-2 text-lg text-embed-900'}>
          Rocketprices
        </h1>
        Rocket League prices guide for PS4 and PC pricelist. The most updated
        one, always up to date with the new items; no sign-in required!
      </div>
    );
  },
};
// @ts-ignore

export const timeline: Array<TimelineItems> = {
  2021: [
    {
      title: "Released 'frontend-boilerplate'",
      date: 'May 17th, 2021 - Present',
      brief:
        'Open source boilerplate built using React, Next.js and TailwindsCSS',
      activity: 'launchedProject',
      onClick: () => {
        console.log('4head');
      },
    },
    {
      title: 'discord.style reached 2,000,000 views!',
      date: 'April, 30, 2020',
      activity: 'milestone',
    },
  ],
  2020: [
    {
      title: 'discord.style reached 1,000,000 views!',
      date: 'December, 31, 2020',
      activity: 'milestone',
    },
    {
      title: 'Website for El Papi',
      date: 'November 2020 - 2020',
      brief: (
        <div>
          El Papi has distinguished itself as one of the fastest growing artists
          in Norway with over 110 million streams.
        </div>
      ),
      activity: 'newJob',
    },
    {
      title: 'Probot',
      date: 'November 5, 2020 - Present',
      brief: 'Started working at Probot.io as a part time UI designer.',
      activity: 'newJob',
    },
    {
      title: 'Apprentice',
      date: 'September 16, 2020 - Present',
      brief: 'Started working for Flyt as their new Software Engineer.',
      activity: 'newJob',
    },
    {
      title: 'UI Designer, TuneTrack.app',
      date: 'August 8, 2020 - 2020',
      brief: 'Designed the website for TuneTracks official app.',
      activity: 'design',
    },
    {
      title: 'discord.style reached 500,000 views!',
      date: 'August, 5, 2020',
      activity: 'milestone',
    },
    {
      title: 'Website for Marvin Divine',
      date: '2020 - 2020',
      brief: (
        <div>
          Marvin needed a website to expand his audience in Norway.
          <p className={'mt-3 flex'} />
          He's signed by the NBA, and he got his fame after making{' '}
          <a
            href={'https://www.youtube.com/watch?v=AlXfbVpDUdo'}
            target={'_blank'}
            className={'underline'}
          >
            MATAFAKA
          </a>
          , which later was featured in the NBA.
        </div>
      ),
      activity: 'newJob',
    },
    {
      title: 'Launched discord.style',
      date: 'April 13, 2020 - Present',
      brief:
        'Provides a huge variety of templates to help build Discord servers, without all the hassle.',
      embed: Embed.discordStyle(),
      activity: 'launchedProject',
    },
  ],
  2019: [
    {
      title: 'Rocketprices shut down.',
      date: 'October, 29, 2018',
      // brief: (
      //   <div>
      //     Exactly 927 days after we hit 70 million page views, I felt as if the
      //     reaper had came to collect it's target.
      //     <p className={'mt-3'} />
      //     At this point, Rocketprices had already been dead for a very long
      //     time, but I couldn't let my baby go.
      //     <p className={'mt-3'} />
      //     So from January 15th 2018 to October 29 2019 (927d) - we only gained
      //     6,7 million pageviews.
      //   </div>
      // ),
      activity: 'sunsetted',
    },
    {
      title: 'Launched Apex-Hub.com',
      date: 'February 27 2019 - 2020',
      brief: (
        <div>
          Launched Apex-Hub together with{' '}
          <a
            href={'https://sambeevors.com/'}
            className={'underline'}
            target="_blank"
          >
            Sam Beevors.
          </a>
        </div>
      ),

      embed: Embed.ApexHub(),

      activity: 'launchedProject',
    },
  ],
  2018: [
    {
      title: 'Rocketprices reached 70,000,000 views!',
      date: 'April, 16, 2018',
      brief: (
        <div>
          Glad to have reached 70 million views, but I knew the Grim Reaper was
          close by.
        </div>
      ),
      activity: 'milestone',
    },
    {
      title: 'Rocketprices reached 60,000,000 views!',
      date: 'January, 15, 2018',
      brief: (
        <div>
          154 days after Rocketprices reached 30 million views, we reached 60
          million.
          <p className={'mt-3'} />
          By this time, we noticed that the userbase stopped growing at a
          tremendous rate, but it remained steady at around 200,000 daily page
          views.
        </div>
      ),
      activity: 'milestone',
    },
  ],
  2017: [
    {
      title: 'High School',
      date: 'August 2017 - June 2020',
      brief:
        'Studied Computer Systems and Telecommunication at Hadeland High School.',
      activity: 'education',
    },
    {
      title: 'Rocketprices reached 30,000,000 views!',
      date: 'August, 14, 2017',
      brief:
        'We had a steady growth, and only 93 days after hitting the 10 million mark, we finally hit 30!',
      activity: 'milestone',
    },
    {
      title: 'Rocketprices reached 10,000,000 views!',
      date: 'May, 11, 2017',
      brief:
        'Only 80 days after reaching the first million mark, we managed to hit 10 million!',
      activity: 'milestone',
    },
    {
      title: 'Rocketprices reached 1,000,000 views!',
      date: 'February, 20, 2017',
      brief:
        'Exactly 53 days after launching Rocketprices, we managed to reach a total of 1,000,000 pageviews!',
      activity: 'milestone',
    },
  ],
  2016: [
    {
      title: 'Rocketprices',
      date: 'December 29, 2016 - March 2019',
      brief:
        'Founded the largest trading / community website for Rocket League.',
      activity: 'newJob',
      last: true,
    },
  ],
};
