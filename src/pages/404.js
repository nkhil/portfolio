import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

const NotFound = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>OH NO - 404</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Layout navlinkColor="#000">
      <h1>Not Found</h1>
    </Layout>
  </>
);

export default NotFound;
