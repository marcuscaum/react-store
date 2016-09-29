import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Firebase from 'firebase';

import Header from './components/Header';

import './App.css';

const config = {
  apiKey: "AIzaSyA5b3D4A5wBzkG4BLDmGQSk0D9n6kNOSAE",
  authDomain: "reactstore-abae3.firebaseapp.com",
  databaseURL: "https://reactstore-abae3.firebaseio.com",
  storageBucket: "reactstore-abae3.appspot.com",
  messagingSenderId: "165938608777"
};

Firebase.initializeApp(config);

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
