import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimeList from '../../components/TimeList';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<TimeList />);
});

describe('TimeList-Components', () => {
  it('Rendering TimeList component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});