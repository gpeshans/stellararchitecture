import * as React from 'react';
import { Link } from 'gatsby';

// markup
const NotFoundPage: React.FunctionComponent = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry!
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
