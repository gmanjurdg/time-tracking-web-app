import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Timer from '../../components/Timer';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Timer />);
});

describe('Timer-Components', () => {
  it('Rendering Timer component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});