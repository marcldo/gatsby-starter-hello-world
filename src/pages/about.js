import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>I'm Marc, a full-stack developer in Toronto</p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  );
};

export default AboutPage;