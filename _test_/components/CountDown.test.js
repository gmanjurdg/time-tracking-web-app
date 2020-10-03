import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CountDown from '../../components/CountDown';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<CountDown />);
});

describe('CountDown-Components', () => {
  it('Rendering CountDown component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});