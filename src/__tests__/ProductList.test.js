import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from '../ProductsList';

describe('<ProductsList />', () => {

  it('renders without crashing', () => {
    shallow(<ProductsList/>);
  });

})
