import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <p>
        The best way to reach me is <a href="http://google.com" target="_blank" rel="noreferrer">marc@mail.com</a>
      </p>
    </Layout>
  );
};

export default ContactPage;