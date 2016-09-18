import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './ProductsList.css';


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

    let items  = this.state.products.map(
      (item, key) => {
        return (
          <Col id={`product_${key+1}`} className="products-item" md={3} key={key}>
            <h1 className="products-item--title">{item.name}</h1>
            <p className="products-item--descript">{item.description}</p>
          </Col>
        )
      }
    )


    return (
      <Col md={9}>
        <Row>
          <ReactCSSTransitionGroup
            transitionName="products-item"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {items}
          </ReactCSSTransitionGroup>
        </Row>
      </Col>
    );
  }
}

export default ProductsList;
