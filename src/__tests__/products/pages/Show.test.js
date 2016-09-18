import React from 'react';
import { shallow } from 'enzyme';
import ProductsShow from '../../../products/pages/Show';

describe('<ProductsShow />', () => {

  it('renders without crashing', () => {
    shallow(<ProductsShow/>);
  });
})
