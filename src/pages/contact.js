import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact Me</h1>
      <p>
        The best way to reach me is <a href="http://google.com" target="_blank">marc@mail.com</a>
      </p>
      <Footer />
    </div>
  );
};

export default ContactPage;