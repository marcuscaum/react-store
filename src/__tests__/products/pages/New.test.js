import React from 'react';
import { shallow } from 'enzyme';
import ProductsNew from '../../../products/pages/New';

describe('<ProductsNew />', () => {

  it('renders without crashing', () => {
    shallow(<ProductsNew/>);
  });
})
