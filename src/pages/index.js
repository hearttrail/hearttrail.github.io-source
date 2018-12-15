import get from 'lodash/get';
import React from 'react';

import ArticlePreview from '../components/article-preview';
import ContentBlock from '../components/content-block';
import constants from '../constants';
import CtaButton from '../components/cta-button';
import Divider from '../components/divider';
import Hero from '../components/hero';
import Map from '../components/map';
import Quote from '../components/quote';
import QuoteBlock from '../components/quote-block';
import Seo from '../components/seo';
import Stats from '../components/stats';
import styles from './index.module.scss';

import BikeCloseUpImage from '../images/bike-close-up.jpg';
import JamesRecoveryImage from '../images/james-recovery.jpg';

class RootIndex extends React.Component {
  render() {
    const siteMetadata = get(this.props, 'data.site.siteMetadata');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const page = get(this, 'props.data.allContentfulPage.edges[0].node');

    return (
      <div>
        <Seo {...siteMetadata} />
        <Hero data={page} />
        <QuoteBlock>
          <h2>
            A bike ride to raise awareness of the value of organ&nbsp;donation
          </h2>
          <p>
            The heart trail is a self-imposed challenge set by the recipient of
            life-changing gift: <strong>a heart</strong>. Over a weekend in
            January 2019, James Sheppard and a group of his closest friends and
            family will set out to ride the 200km Silo Art Trail in rural
            Victoria. The purpose? To show that organ donation can be absolutely
            life-changing.
          </p>
          <CtaButton
            className={styles.ctaButton}
            href={constants.DONOR_REGISTER_URL}
          >
            Join the donor register today
          </CtaButton>
        </QuoteBlock>
        <Divider />
        <Map />
        <ContentBlock
          background="yellow"
          image={{
            align: 'right',
            alt: 'James recovering in hospital',
            src: JamesRecoveryImage,
          }}
        >
          <p>
            In the space of a three year period James went from being relatively
            healthy to losing a third of his body weight, being unable to walk
            and reliant on a wheelchair. After several months in several
            hospitals across Melbourne, was diagnosed with Cardiomyopathy and
            was put on the heart transplant waiting list. Doctors had some dire
            warnings:
          </p>
          <Quote>
            There is a chance you will die before a heart becomes available.
          </Quote>
          <p>
            8 months later the phone rang. James had one hour to be at the
            Alfred hospital. They had a heart for him. After a week in ICU and
            another week on the ward James was sent home.
          </p>
        </ContentBlock>
        <Stats />
        <ContentBlock
          background="purple"
          image={{
            align: 'left',
            alt: 'Bike with silo in background',
            src: BikeCloseUpImage,
          }}
        >
          <p>
            Physios advised James needed to find a hobby that would keep him fit
            and healthy, and cycling was it. He now has a new lease on life,
            allowing him to stay fit and active, enjoy time with family and
            friends, and look forward to the future. He was lucky that a heart
            became available in time, but others in Australia are often not so
            lucky.
          </p>
          <p>
            Heart trail aims to better the odds for those that are waiting. We
            hope to start the conversation for people to discuss their
            preferences with their loved ones and to hopefully decide to
            register.
          </p>
          <Quote>
            Whether we encourage 1 person or 1000 people to register, lives will
            be changed.
          </Quote>
          <p>
            Registering is just the beginning. Discussing your organ donation
            preferences with loved ones is equally important as they will have
            the final say.
          </p>
        </ContentBlock>

        <div className="wrapper">
          <h2 className="section-headline">Updates</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        description
        image
        instagramUrl
        title
        url
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPage(filter: { id: { eq: "c4VxwuqVJU4Yy6c8uIUaUaG" } }) {
      edges {
        node {
          name
          heroText
          heroSubtext
          heroImage {
            description
            file {
              url
            }
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
