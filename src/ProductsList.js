import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
// import './ProductsList.css';


class ProductsList extends Component {

  constructor(props) {
    super(props);

    this.state = { products: [] }
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts() {
    fetch(this.props.source)
      .then(response => response.json())
      .then(json => {
          this.setState({
            products: json
          })
      })
  }

  render() {
    return (
      <Col md={9}>
        <Row>
          {this.state.products.map((item, key) =>
            <Col id={`product_${key+1}`} className="product-item" md={3}> {item.name} </Col>
          )}
        </Row>
      </Col>
    );
  }
}

export default ProductsList;
