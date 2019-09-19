import React from 'react';
import BoxList from './BoxList';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";


it('renders without crashing', () => {
  shallow(<BoxList />)
});

it('matches snapshot', function () {
  let wrapper = shallow(<BoxList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})

it('adds boxes', function () {
  const boxes = [{ id: "9", height: "10", width: "10", backgroundColor: "orange" }];
  const wrapper = mount(<BoxList />);

  wrapper.setState({ boxes: boxes });
  expect(wrapper.state().boxes).toEqual([
    { id: "9", height: "10", width: "10", backgroundColor: "orange" }
  ]);

  wrapper
    .instance()
    .addBox({ height: "50", width: "50", backgroundColor: "green" });

  expect(wrapper.state().boxes).toEqual([
    { id: "9", height: "10", width: "10", backgroundColor: "orange" },
    { id: expect.any(String), height: "50", width: "50", backgroundColor: "green" }
  ])
});

it('finds a form and successfully makes box', function() {
  const wrapper = mount(<BoxList />);
  const heightInput = wrapper.find('#height');
  heightInput.instance().value = "10";
  heightInput.simulate("change")

  const form = wrapper.find("form");
  form.simulate("submit");
  expect(wrapper.state().boxes.length).toEqual(1);
})