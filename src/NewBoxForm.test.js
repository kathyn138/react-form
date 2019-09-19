import React from 'react';
import NewBoxForm from './NewBoxForm';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";


it('renders without crashing', () => {
  shallow(<NewBoxForm />)
});

it('matches snapshot', function () {
  let wrapper = shallow(<NewBoxForm />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})

it('allows for changes in height, width, backgroundColor', function () {
  let wrapper = mount(<NewBoxForm />);
  const heightInput = wrapper.find('#height');
  heightInput.instance().value = "10";
  heightInput.simulate("change")

  expect(wrapper.state().height).toEqual("10");

  const widthInput = wrapper.find('#width');
  widthInput.instance().value = "20";
  widthInput.simulate("change");

  expect(wrapper.state().width).toEqual("20");

  const colorInput = wrapper.find('#backgroundColor');
  colorInput.instance().value = "orange";
  colorInput.simulate("change");

  expect(wrapper.state().backgroundColor).toEqual("orange");
});

it('runs a mocked fn on submit', function () {
  const submitFn = jest.fn();
  let wrapper = mount(<NewBoxForm addBox={submitFn} />);
  const form = wrapper.find("form");
  form.simulate("submit");
  expect(submitFn).toHaveBeenCalled();
});

it('resets state on submit', function () {
  const submitFn = jest.fn();
  let wrapper = mount(<NewBoxForm addBox={submitFn} />);

  const heightInput = wrapper.find('#height');
  heightInput.instance().value = "10";
  heightInput.simulate("change")

  expect(wrapper.state().height).toEqual("10");

  const widthInput = wrapper.find('#width');
  widthInput.instance().value = "20";
  widthInput.simulate("change");

  expect(wrapper.state().width).toEqual("20");

  const colorInput = wrapper.find('#backgroundColor');
  colorInput.instance().value = "orange";
  colorInput.simulate("change");

  expect(wrapper.state().backgroundColor).toEqual("orange");

  const form = wrapper.find("form");
  form.simulate("submit");
  expect(wrapper.state()).toEqual({
    height: '',
    width: '',
    backgroundColor: ''
  });
});

