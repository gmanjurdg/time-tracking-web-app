import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TimeCard from '../../components/TimeCard';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<TimeCard />);
});

describe('TimeCard-Components', () => {
  it('Rendering TimeCard component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
});