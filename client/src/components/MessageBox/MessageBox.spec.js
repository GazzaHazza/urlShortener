import React from "react";
import MessageBox from "./MessageBox";
import { shallow, mount } from "enzyme";
import "jest-styled-components";

it("renders correctly with error class", () => {
  const wrapper = mount(
    <MessageBox
      message="hello"
      hasError={true}
      hasAdded={false}
      shortUrl="www.hello.com/1"
    />
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule("background", "#ffa6ab");
  expect(wrapper).toHaveStyleRule("border-color", "#ff5964");
});

it("renders correctly backgrund correctly depending on hasAdded prop", () => {
  const wrapper = mount(
    <MessageBox
      message="hello"
      hasError={false}
      hasAdded={true}
      shortUrl="www.hello.com/1"
    />
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper).toHaveStyleRule("background", "#b1f8b8");
  expect(wrapper).toHaveStyleRule("border-color", "#6bf178");
});
