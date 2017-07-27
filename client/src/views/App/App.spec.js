import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import "jest-styled-components";

it("renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
