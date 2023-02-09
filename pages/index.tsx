import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection
            imageUrl="/demo-illustration-1.svg"
            title="Maximize Your Display Advertising with Data-Driven Insights."
            overTitle="Revolutionary Data-Driven Display Advertising"
          >
            <p>
              Take control of your display advertising with our Adtech dashboard interface. Experience the power of{' '}
              <Link href="/help-center">multi-touch attribution and advanced targeting strategies</Link> managed by our team of experts. Get
              the data-driven insights you need to drive results and achieve success. Join the revolution in display advertising today with
              our Adtech startup
            </p>
          </BasicSection>
          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="Boost Your Search Presence with Our Adtech Solutions."
            overTitle="Elevate Your Search Advertising"
            reversed
          >
            <p>
              Take your search advertising to the next level with our Adtech startup. Our Paid Search and SEO services powered by{' '}
              <strong>Microsoft Ads and Google Ads </strong> will help you reach your target audience and drive results. Our team of experts
              will work with you to develop targeted campaigns and optimize your search presence, delivering the performance you need to
              succeed in the current competitive landscape.
            </p>
            <ul>
              <li>Boost your search presence</li>
              <li>Expert guidance and optimization</li>
              <li>Access to industry-leading technology</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
