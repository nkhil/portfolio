import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import NotFoundComponent from '../components/NotFound';

const NotFound = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>OH NO - 404</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Layout>
      <NotFoundComponent />
    </Layout>
  </>
);

export default NotFound;
