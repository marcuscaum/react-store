import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import ProductsIndex from './products/pages/Index';
import ProductsShow from './products/pages/Show';
import ProductsNew from './products/pages/New';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="products" component={ProductsIndex}/>
      <Route path="products/show/:productId" component={ProductsShow}/>
      <Route path="products/new/" component={ProductsNew}/>
    </Route>
  </Router>
), document.getElementById('root'));
