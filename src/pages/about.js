import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';
import Header from '../components/header';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>I'm Marc, a full-stack developer in Toronto</p>
      <Link to="/contact">Contact Me</Link>
      <Footer />
    </div>
  );
};

export default AboutPage;