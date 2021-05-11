import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";

import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
             contentful_id
             title
             file {
                url
             }
          }
       }
      }
    }
  }
`;

const Blog = (props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const imageID = node.data.target.sys.id;
        const {
          file: { url },
          title
        } = props.data.contentfulBlogPost.body.references.find(({ contentful_id: id }) => id === imageID);
        return <img alt={title} src={url} />
      }
    }
  };

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(props.data.contentfulBlogPost.body.raw), options
      )
      }
    </Layout>
  );
};

export default Blog;