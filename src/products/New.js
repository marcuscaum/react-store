import React, { Component } from 'react';
import { Col, FormGroup, FormControl, ControlLabel, InputGroup, Button } from 'react-bootstrap';
import Firebase from 'firebase';
import Dropzone from 'react-dropzone';

class New extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      images: ''
    }
  }

  getValidationState(state) {
    const length = state.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  onDropImage(files) {
    let images = this.state.images || [];

    images.push(files);

    this.setState({
      images: images
    });
  }

  render() {
    return (
      <form>
        <legend> Adicionar um novo produto</legend>
        <Col md={6}>
          <FormGroup validationState={this.getValidationState(this.state.name)}>
            <ControlLabel>Nome do Produto:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup validationState={this.getValidationState(this.state.description)}>
            <ControlLabel>Descrição:</ControlLabel>
            <FormControl
                componentClass="textarea"
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
                rows="5"
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="success" onClick={this.createNewProduct}> Adicionar produto</Button>
        </Col>
        <Col md={6}>
          <FormGroup>
            <ControlLabel>Valor:</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.price}
                onChange={(e) => this.setState({ price: e.target.value })}
              />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Imagem do produto:</ControlLabel>
            <Dropzone onDrop={this.onDropImage.bind(this)}>
              <div>Try dropping some files here, or click to select files to upload.</div>
            </Dropzone>
          </FormGroup>
        </Col>
      </form>
    );
  }
}

export default New;
