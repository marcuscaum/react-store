import React from 'react';
import { shallow } from 'enzyme';
import ProductsNew from '../../../products/New';

describe('<ProductsNew />', () => {

  it('renders without crashing', () => {
    shallow(<ProductsNew/>);
  });
})
