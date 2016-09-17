import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
// import './ProductsList.css';

class ProductsList extends Component {
  render() {
    return (
      <Col md={9}>
        <Row>
          <Col md={3}>Produto 1</Col>
          <Col md={3}>Produto 2</Col>
          <Col md={3}>Produto 3</Col>
          <Col md={3}>Produto 4</Col>
        </Row>
      </Col>
    );
  }
}

export default ProductsList;
