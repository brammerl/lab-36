import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character Component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  