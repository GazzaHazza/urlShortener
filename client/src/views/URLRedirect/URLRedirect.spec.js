import React from "react";
import { shallow } from "enzyme";
import { URLRedirect } from "./URLRedirect";

it("renders correctly", () => {
  const wrapper = shallow(<URLRedirect />);
  expect(wrapper).toMatchSnapshot();
});

it("should call getOriginalUrl on componentDidMount", () => {
  const getOriginalUrlStub = jest.fn();
  const mockProps = {
    match: {
      params: {
        urlCode: 1
      }
    }
  };
  const wrapper = shallow(
    <URLRedirect getOriginalUrl={getOriginalUrlStub} {...mockProps} />
  );
  wrapper.instance().componentDidMount();
  expect(getOriginalUrlStub).toBeCalled();
});

it("should call componentWillRecieveProps when correct state changes", () => {
  const mockProps = {
    url: {
      originalUrl: "test"
    }
  };
  const wrapper = shallow(<URLRedirect {...mockProps} />);
  const spy = jest.spyOn(URLRedirect.prototype, "componentWillReceiveProps");
  wrapper.setProps({ url: { originalUrl: "test1" } });
  expect(spy).toBeCalled();
});
