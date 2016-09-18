import React from 'react';
import { shallow } from 'enzyme';
import ProductsShow from '../../../products/Show';

describe('<ProductsShow />', () => {

  it('renders without crashing', () => {
    shallow(<ProductsShow/>);
  });
})
