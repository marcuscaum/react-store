import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="fill">
        <Header/>
        <Grid fluid>
          <Row>
            <Col md={3}>
              Xunda shop
            </Col>
            <Col md={9}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
