import React, { Component } from 'react';
import ProductsList from '../components/ProductsList';
import './Index.css';

class Index extends Component {
  render() {
    return (
      <div className="products">
        <ProductsList source="https://react-store-api.herokuapp.com/products/all"/>
      </div>
    );
  }
}

export default Index;
