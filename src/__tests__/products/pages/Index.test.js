import React from 'react';
import { shallow } from 'enzyme';
import ProductsIndex from '../../../products/pages/Index';

describe('<ProductsIndex />', () => {

  it('renders without crashing', () => {
    shallow(<ProductsIndex/>);
  });
})
