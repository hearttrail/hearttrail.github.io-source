import get from 'lodash/get';
import Helmet from 'react-helmet';
import React from 'react';

import ArticlePreview from '../components/article-preview';
import Button from '../components/button';
import constants from '../constants';
import Hero from '../components/hero';
import styles from './index.module.scss';

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const page = get(this, 'props.data.allContentfulPage.edges[0].node');

    return (
      <div>
        <Helmet title={siteTitle} />
        <Hero data={page} />
          <Button
            className={styles.ctaButton}
            href={constants.DONOR_REGISTER_URL}
          >
            Join the donor register today
          </Button>
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
