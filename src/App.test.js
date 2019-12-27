import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdaptor from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdaptor() });

/**
 * Factory function to create a ShallowWrapper for the App component
 * "@function setup"
 * @param {object} props -Component props specific to this setup.
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

/**
 * Return Shallow wrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper -Enzyme Shallow wrapper to search within
 * @param {string} val -Value of data-test attribute for search
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  //shallow wrapper is rendering the app
  const wrapper = setup();
  //helpful for debugging
  //console.log(wrapper.debug());
  //it will not be undefined or empty string
  const appComponent = findByTestAttr(wrapper, "component-app");
  //expect(wrapper).toBeTruthy();
  expect(appComponent.length).toBe(1);
});

test("render increment button", () => {
  const wrapper = setup();
  //helpful for debugging
  const incrmentButton = findByTestAttr(wrapper, "incrment-button");
  expect(incrmentButton.length).toBe(1);
});

test("render decrement button", () => {
  const wrapper = setup();
  //helpful for debugging
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const intitialCounterState = wrapper.state("counter");
  expect(intitialCounterState).toBe(0);
});

test("clicking button increments counter display", () => {
  //evolve the setting the initial state
  //we want to make sure if it starts at 7 and we increment it should be 8
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "incrment-button");
  button.simulate("click");
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("clicking button decrement counter display", () => {
  //evolve the setting the initial state
  //we want to make sure if it starts at 7 and we increment it should be 8
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

test("clicking button decrement show error message if counter is less than zero", () => {
  //evolve the setting the initial state
  //we want to make sure if it starts at 7 and we increment it should be 8
  const counter = 0;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  wrapper.update();
  const errorDisplay = findByTestAttr(wrapper, "error-message-test");
  expect(errorDisplay.length).toBe(1);
});
