import React from "react";
import MessageBox from "./MessageBox";
import { shallow } from "enzyme";

it("renders correctly with error class", () => {
  const wrapper = shallow(
    <MessageBox
      message="hello"
      hasError={true}
      hasAdded={false}
      shortUrl="www.hello.com/1"
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly with added class", () => {
  const wrapper = shallow(
    <MessageBox
      message="hello"
      hasError={false}
      hasAdded={true}
      shortUrl="www.hello.com/1"
    />
  );
  expect(wrapper).toMatchSnapshot();
});
