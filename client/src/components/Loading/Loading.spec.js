import React from "react";
import Loading from "./Loading";
import { shallow } from "enzyme";
import "jest-styled-components";

it("renders correctly", () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});
