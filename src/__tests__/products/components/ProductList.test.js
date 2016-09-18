import React from 'react';
import { shallow } from 'enzyme';
import ProductsList from '../../../components/ProductsList';

describe('<ProductsList />', () => {

  it('renders without crashing', () => {
    shallow(<ProductsList/>);
  });
})
