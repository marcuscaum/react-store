import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Firebase from 'firebase';
import _ from 'lodash';

import './ProductsList.css';

class ProductsList extends Component {

  constructor(props) {
    super(props);
    this.state = { products: [] }
  }

  componentWillMount() {
    let items = [];

    this.firebaseRef = Firebase.database().ref('products');
    this.firebaseRef.on("child_added", (dataSnapshot) => {
      console.log(dataSnapshot.val());
      items.push(dataSnapshot.val());
      this.setState({
        products: items
      });
    });
  }

  render() {
    let loadedItems = this.state.products.map(
      (item, key) => {
        return (
          <Col id={`product_${key+1}`} md={3} key={key}>
            <div className="products-item">
              <h2 className="products-item--name">{item.name}</h2>
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
