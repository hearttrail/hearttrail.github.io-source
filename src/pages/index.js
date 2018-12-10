import get from 'lodash/get';
import Helmet from 'react-helmet';
import React from 'react';

import ArticlePreview from '../components/article-preview';
import Button from '../components/button';
import ContentBlock from '../components/content-block';
import constants from '../constants';
import Hero from '../components/hero';
import Map from '../components/map';
import QuoteBlock from '../components/quote-block';
import styles from './index.module.scss';

import BikeCloseUpImage from '../images/bike-close-up.jpg';
import JamesRecoveryImage from '../images/james-recovery.jpg';
import JamesSiloImage from '../images/james-sheppard.jpg';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const page = get(this, 'props.data.allContentfulPage.edges[0].node');

    return (
      <div>
        <Helmet title={siteTitle} />
        <Hero data={page} />
        <QuoteBlock>
          <h2>
            A bike ride to raise awareness of the value of organ&nbsp;donation
          </h2>
          <p>
            The heart trail is a self-imposed challenge set by the recipient of
            life-changing gift: a heart. Over a weekend in January 2019, a group
            of decidedly novice cyclists will set out to ride the 200km Silo Art
            Trail in rural Victoria, Australia. The purpose? To show that organ
            donation can be absolutely life-changing.
          </p>
          <Button
            className={styles.ctaButton}
            href={constants.DONOR_REGISTER_URL}
          >
            Join the donor register today
          </Button>
        </QuoteBlock>
        <Map />
        <div className="wrapper">
          <img src={JamesSiloImage} alt="James in front of a silo" />
        </div>
        <div className="wrapper">
          <ContentBlock
            image={{
              align: 'right',
              alt: 'Bike with silo in background',
              src: BikeCloseUpImage,
            }}
          >
            Toad-like smile Flourish and Blotts he knew I’d come back Quidditch
            World Cup. Fat Lady baubles banana fritters fairy lights Petrificus
            Totalus. So thirsty, deluminator firs’ years follow me 12 inches of
            parchment. Head Boy start-of-term banquet Cleansweep Seven roaring
            lion hat. Unicorn blood crossbow mars is bright tonight, feast
            Norwegian Ridgeback. Come seek us where our voices sound, we cannot
            sing above the ground, Ginny Weasley bright red. Fanged frisbees,
            phoenix tears good clean match. Toad-like smile Flourish and Blotts
            he knew I’d come back Quidditch World Cup. Fat Lady baubles banana
            fritters fairy lights Petrificus Totalus. So thirsty, deluminator
            firs’ years follow me 12 inches of parchment. Head Boy start-of-term
            banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow
            mars is bright tonight, feast Norwegian Ridgeback. Come seek us
            where our voices sound, we cannot sing above the ground, Ginny
            Weasley bright red. Fanged frisbees, phoenix tears good clean match.
          </ContentBlock>
        </div>
        <div className="wrapper">
          <ContentBlock
            image={{
              align: 'left',
              alt: 'James on the road to recovery',
              src: JamesRecoveryImage,
            }}
          >
            Half-giant jinxes peg-leg gillywater broken glasses large black dog
            Great Hall. Nearly-Headless Nick now string them together, and
            answer me this, which creature would you be unwilling to kiss?
            Poltergeist sticking charm, troll umbrella stand flying cars golden
            locket Lily Potter. Pumpkin juice Trevor wave your wand out glass
            orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul
            Muggle-Born large order of drills the trace. Bred in captivity fell
            through the veil, quaffle blue flame ickle diddykins Aragog. Yer a
            wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.
          </ContentBlock>
        </div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
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
        title
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
