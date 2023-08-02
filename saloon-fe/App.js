// This page will be inside src file

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductPage from './ProductPage';
import BlogPage from './BlogPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product" component={ProductPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
