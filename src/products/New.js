import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel, InputGroup, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Firebase from 'firebase';
import Dropzone from 'react-dropzone';
import { TwitterPicker } from 'react-color';

class New extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      price: '',
      images: [],
      options: {
        colors: [],
        sizes: []
      },
      displayColorPicker: false
    }
    window.state = this.state;
  }

  getValidationState(state) {
    const length = state.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  onDropImage = (files) => {
    let images = this.state.images || [];

    images.push(files);
    this.setState({
      images: images
    });
  }

  onSelectColor = (color) => {
    let colors = this.state.options.colors;
    if (colors.length === 5) {
      return this.setState({displayColorPicker: false})
    };

    colors.push(color.hex);
    this.forceUpdate();
  }

  sizeButtons() {
    return(
      <div>
        <Button active={(this.state.options.sizes.indexOf("P") > -1)} onClick={this.handleSizes.bind(this, "P")}>P</Button>
        <Button active={(this.state.options.sizes.indexOf("M") > -1)} onClick={this.handleSizes.bind(this, "M")}>M</Button>
        <Button active={(this.state.options.sizes.indexOf("G") > -1)} onClick={this.handleSizes.bind(this, "G")}>G</Button>
        <Button active={(this.state.options.sizes.indexOf("GG") > -1)} onClick={this.handleSizes.bind(this, "GG")}>GG</Button>
        <Button active={(this.state.options.sizes.indexOf("XGG") > -1)} onClick={this.handleSizes.bind(this, "XGG")}>XGG</Button>
      </div>
    )
  }

  handleSizes(size) {
    let sizes = this.state.options.sizes;
    let sizeIndex = sizes.indexOf(size);

    (sizeIndex > -1) ? sizes.splice(sizeIndex, 1) : sizes.push(size);
    this.forceUpdate();
  }

  addProduct() {
    const products = Firebase.database().ref('products/');
    products.push(this.state, () => {
      console.log('terminou!')
    });
  }

  render() {

    return (
      <form>
        <legend> Adicionar um novo produto</legend>
        <Row>
          <Col md={6}>
            <FormGroup validationState={this.getValidationState(this.state.name)}>
              <ControlLabel>Nome do Produto:</ControlLabel>''
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
            <FormGroup>
            <ControlLabel>Adicionar imagens:</ControlLabel>
              <Dropzone className="image-dropzone" onDrop={this.onDropImage}>
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
            </FormGroup>
          </Col>
          <Col md={6} onMouseLeave={() => this.setState({displayColorPicker: false})}>
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
            <FormGroup >
              <ControlLabel>Cores:</ControlLabel>
              <div className="colorpicker-tiles" onClick={() => this.setState({displayColorPicker: true})}>
                {this.state.options.colors.map((color, key) => <div key={key} style={{backgroundColor: color}}></div> )}
              </div>
              { this.state.displayColorPicker ? <TwitterPicker  onMouseLeave={() => this.setState({displayColorPicker: false})} color={this.state.options.colors} onChangeComplete={this.onSelectColor}/> : null }
            </FormGroup>
            <FormGroup>
              <ControlLabel>Tamanhos:</ControlLabel>
              <ButtonToolbar>
                <ButtonGroup>
                  {this.sizeButtons()}
                </ButtonGroup>
              </ButtonToolbar>
            </FormGroup>
            <FormGroup>
              {this.state.images.length > 0 ? <div>
              <div className="uploaded-images">{this.state.images.map((image, key) => <img key={key} src={image[0].preview} role="presentation"/> )}</div>
              </div> : null}
            </FormGroup>
          </Col>
        </Row>
        <ButtonGroup>
          <Button bsStyle="success" onClick={this.addProduct.bind(this)}> Adicionar produto</Button>
        </ButtonGroup>
      </form>
    );
  }
}

export default New;
