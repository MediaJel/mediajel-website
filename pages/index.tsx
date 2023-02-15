import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
// import Link from 'components/Link';
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
            title="Breakdown of 3 Products (Paid Search, Display, SEO)"
            overTitle="Owned by Dana, Pach and Jay"
          >
            <p>Description of 3 products here</p>
          </BasicSection>
          <BasicSection
            imageUrl="/demo-illustration-2.svg"
            title="Boost Your Search Presence with Our Adtech Solutions."
            overTitle="Owned by Pach"
            reversed
          >
            <p>
              Our integrations work with enterprise ETL pipelines and industry-leading APIs like{' '}
              <strong> Google Ads, Microsoft Ads and many more.</strong> Streamline your data integration, make data-driven decisions, and
              take your marketing analytics to the next level with us.
            </p>
            <ul>
              <li>Unify Your Marketing Data: Our adtech platform provides a centralized hub for all your marketing data. </li>
              <br />
              <li>
                Industry-Leading Integrations: Our platform seamlessly integrates with the most popular advertising platforms such as Google
                Ads and Microsoft Ads, as well as third-party tools to ensure you have access to all the data you need.
              </li>
              <br />
              <li>
                Advanced Analytics: Our platform uses multi-touch attribution to help you understand the impact of each touchpoint on your
                customer journey, providing you with deep insights and actionable intelligence to optimize your campaigns.
              </li>
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
