import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import CountDownInput from '../../components/CountDownInput';


let wrapper;
beforeEach(() => {
  wrapper = shallow(<CountDownInput />);
});

describe('CountDownInput-Components', () => {
  it('Rendering CountDownInput component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});