import React, { Component } from 'react';
// import {Grid, Row, Col, Clearfix, Navbar, Jumbotron, Button } from 'react-bootstrap';
import ProductsList from './ProductsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="products">
        <ProductsList source="http://react-store-api.herokuapp.com/products/all"/>
      </div>
    );
  }
}

export default App;
