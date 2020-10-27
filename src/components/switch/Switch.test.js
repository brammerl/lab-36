import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

describe('Switch component', () => {
  it('renders Switch', () => {
    const wrapper = shallow(<Switch />);
    expect(wrapper).toMatchSnapshot();
  });
});
  