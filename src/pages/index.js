/* eslint-disable react/display-name */
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Work from '../components/Projects';

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nikhil Vijayan - Hi, I'm Nikhil.</title>
      <link rel="canonical" href="http://mysite.com/example" />
      script=
      {[
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          type: 'text/javascript',
        },
      ]}
      <script>
        {`if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }`}
      </script>
    </Helmet>
    <Layout>
      <Hero />
      <Work />
    </Layout>
  </>
);
