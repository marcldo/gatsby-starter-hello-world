import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm Marc, a full-stack developer in Toronto</p>
      <Link to="/contact">Contact Me</Link>
    </div>
  );
};

export default AboutPage;