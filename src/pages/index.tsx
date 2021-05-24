import { Layout } from '../common/layouts/Layout';

import Container from '../common/components/Container';
import Hero from '../common/components/Hero';
import Quote from '../common/components/Quote';

import Avatar from '../common/components/Avatar';
import Timeline from '../common/components/Timeline';

export default function Home() {
  return (
    <Layout>
      <Hero>
        <Container>
          <h1
            className={'font-bold text-on-hero-900 text-4xl md:text-6xl mb-6 '}
          >
            Hi!
            <h5 className={'hidden md:inline text-6xl'}>
              {' '}
              I’m Audun Hilden <Avatar />, an innovative developer and an
              aspiring entrepreneur.
            </h5>
            <h5 className={'inline-block mt-6 md:hidden text-2xl'}>
              I’m Audun Hilden
              <Avatar />, an innovative developer and an aspiring entrepreneur.
            </h5>
          </h1>
          <Quote>
            Specialized on making the world a more cohesive and connected
            society.
          </Quote>
        </Container>
      </Hero>
      <Container>
        <div className={'py-12'}>
          <Timeline />
        </div>
      </Container>
    </Layout>
  );
}
