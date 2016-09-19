import React, { Component } from 'react';
import ProductsList from '../components/ProductsList';
import './Index.css';

class Index extends Component {
  render() {
    const SOURCE_URL = 'http://localhost:3010/products/all' || 'https://react-store-api.herokuapp.com/products/all'

    return (
      <ProductsList source={SOURCE_URL}/>
    );
  }
}

export default Index;
