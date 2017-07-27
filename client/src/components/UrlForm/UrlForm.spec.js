import React from "react";
import { shallow, mount } from "enzyme";
import UrlForm from "./UrlForm";
import "jest-styled-components";

it("renders correctly without isBusy prop", () => {
  const wrapper = shallow(<UrlForm />);
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly with isBusy prop", () => {
  const wrapper = shallow(<UrlForm isBusy={true} />);
  expect(wrapper).toMatchSnapshot();
});

it("set correct default prop", () => {
  const wrapper = mount(<UrlForm />);
  expect(wrapper.prop("isBusy")).toBe(false);
});

it("calls onClickGenerate with correct data", () => {
  const onClickGenerateStub = jest.fn();
  const wrapper = mount(<UrlForm onClickGenerate={onClickGenerateStub} />);
  wrapper
    .find(".urlInput")
    .simulate("change", { target: { value: "http://www.test.com" } });
  wrapper.find("button").simulate("click");
  expect(onClickGenerateStub).toBeCalledWith("http://www.test.com");
});

it("handleInputChange should set state correct", () => {
  const wrapper = mount(<UrlForm />);
  wrapper
    .find(".urlInput")
    .simulate("change", { target: { value: "http://www.test.com" } });
  expect(wrapper.state("urlValue")).toBe("http://www.test.com");
});
