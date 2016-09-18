import React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="fill">
        <Header/>
        <Grid fluid>
          <Row>
            {this.props.children}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
