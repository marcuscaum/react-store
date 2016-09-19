import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';

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
    let loadedItems;

    fetch(this.props.source)
      .then(response => response.json())
      .then(json => {
        this.setState({
          products: json
        })


        this.setState({
          items: loadedItems
        })
      })
  }

  render() {

    let loadedItems = this.state.products.map(
      (item, key) => {
        return (
          <Col id={`product_${key+1}`} md={3} key={key}>
            <div className="products-item">
              <h2 className="products-item--title">{item.name}</h2>
              <p className="products-item--description">{item.description}</p>
            </div>
          </Col>
        )
      }
    )

    let items = _.chunk(loadedItems, 4).map(function(group, key) {
      return <Row className="product-row" key={key}>{group}</Row>
    });

    return <div className="products">{items}</div>;
  }
}

export default ProductsList;
