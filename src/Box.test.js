import React from 'react';
import Box from './Box';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";


it('renders without crashing', () => {
  shallow(<Box />)
});

it('matches snapshot', function() {
  let wrapper = shallow(<Box />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})
