import React, { Component } from 'react';
import { Col, FormGroup, FormControl, ControlLabel, InputGroup, Button } from 'react-bootstrap';


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

  handleChangeTitle(e) { this.setState({ title: e.target.value }) }
  handleChangeDescription(e) { this.setState({ description: e.target.value }) }
  handleChangePrice(e) { this.setState({ price: e.target.value }) }

  render() {
    return (
      <form>
        <legend> Adicionar um novo produto</legend>
        <Col md={6}>
          <FormGroup validationState={this.getValidationState(this.state.title)}>
            <ControlLabel>Nome do Produto:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.name}
              onChange={this.handleChangeName.bind(this)}
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup validationState={this.getValidationState(this.state.description)}>
            <ControlLabel>Descrição:</ControlLabel>
            <FormControl
                componentClass="textarea"
                value={this.state.description}
                onChange={this.handleChangeDescription.bind(this)}
                rows="5"
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="success" onClick={this.createNewProduct}> Adicionar produto</Button>
        </Col>
        <Col md={6}>
          <FormGroup validationState={this.getValidationState(this.state.description)}>
            <ControlLabel>Valor:</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>R$</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.price}
                onChange={this.handleChangePrice.bind(this)}
              />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
      </form>
    );
  }
}

export default New;
