import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>I'm Marc, a web developer</h2>
      <p>Need a developer?</p>
    </Layout>
  );
};

export default IndexPage;

