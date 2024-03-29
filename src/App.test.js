import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";


it('renders without crashing', () => {
  shallow(<App />)
});

it('matches snapshot', function() {
  let wrapper = shallow(<App />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})
