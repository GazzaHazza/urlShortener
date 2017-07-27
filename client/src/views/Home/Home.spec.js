import React from "react";
import { shallow } from "enzyme";
import { Home } from "./Home";
it("renders correctly with default props", () => {
  const mockProps = {
    url: {
      isBusy: false,
      hasAdded: false,
      hasFetched: false,
      hasError: false,
      message: null,
      shortUrl: null,
      originalUrl: null
    }
  };
  const wrapper = shallow(<Home {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly with isBusy prop set true", () => {
  const mockProps = {
    url: {
      isBusy: true,
      hasAdded: false,
      hasFetched: false,
      hasError: false,
      message: null,
      shortUrl: null,
      originalUrl: null
    }
  };
  const wrapper = shallow(<Home {...mockProps} isBusy />);
  expect(wrapper).toMatchSnapshot();
});

it("renders correctly with hasError prop set true", () => {
  const mockProps = {
    url: {
      isBusy: false,
      hasAdded: false,
      hasFetched: false,
      hasError: true,
      message: "test",
      shortUrl: "test",
      originalUrl: null
    }
  };
  const wrapper = shallow(<Home {...mockProps} />);
  expect(wrapper).toMatchSnapshot();
});

it("should call sendNewUrl on when generalNewUrl is called", () => {
  const mockProps = {
    url: {
      isBusy: false,
      hasAdded: false,
      hasFetched: false,
      hasError: true,
      message: "test",
      shortUrl: "test",
      originalUrl: null
    },
    sendNewUrl: jest.fn()
  };
  const wrapper = shallow(<Home {...mockProps} />);
  wrapper.instance().generateNewUrl("hello");
  expect(mockProps.sendNewUrl).toBeCalledWith("hello");
});
