import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import urlReducer, {
  getOriginalUrl,
  sendNewUrl,
  startUrlFetch
} from "./urlReducer";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let store, dispatch, MOCK_INITIAL_STATE, mockAdapter;
beforeEach(() => {
  mockAdapter = new MockAdapter(axios);
  store = createStore(urlReducer, applyMiddleware(thunk));
  dispatch = store.dispatch;
  MOCK_INITIAL_STATE = {
    isBusy: false,
    hasAdded: false,
    hasFetched: false,
    hasError: false,
    message: null,
    shortUrl: null,
    originalUrl: null
  };
});
afterEach(() => {
  mockAdapter.reset();
});

it("should have correct props by default", () => {
  const state = store.getState();
  Object.freeze(state);
  expect(state).toEqual(MOCK_INITIAL_STATE);
});

it("should set isBusy to true when ", () => {
  dispatch(startUrlFetch());
  const state = store.getState();
  expect(state).toEqual({ ...MOCK_INITIAL_STATE, isBusy: true });
});

it("should set correct state when sendNewUrl is successful", async () => {
  const EXPECTED_STATE = {
    isBusy: false,
    hasAdded: true,
    hasFetched: false,
    hasError: false,
    message: "test message",
    shortUrl: "testShortUrl",
    originalUrl: "testOriginalUrl"
  };
  mockAdapter.onPost("/api/new").reply(200, {
    originalUrl: "testOriginalUrl",
    shortUrl: "testShortUrl",
    message: "test message"
  });
  await dispatch(sendNewUrl("http://www.lego.com"));
  const state = store.getState();
  expect(state).toEqual(EXPECTED_STATE);
});

it("should set correct state when sendNewUrl is is unsuccessfull and no shortUrl", async () => {
  const EXPECTED_STATE = {
    isBusy: false,
    hasAdded: false,
    hasFetched: false,
    hasError: true,
    message: "test error message",
    shortUrl: null,
    originalUrl: null
  };
  mockAdapter.onPost("/api/new").reply(500, {
    message: "test error message"
  });
  await dispatch(sendNewUrl("http://www.lego.com"));
  const state = store.getState();
  expect(state).toEqual(EXPECTED_STATE);
});

it("should set correct state when sendNewUrl is is unsuccessfull and with shortUrl", async () => {
  const EXPECTED_STATE = {
    isBusy: false,
    hasAdded: false,
    hasFetched: false,
    hasError: true,
    message: "test error message",
    shortUrl: "testShortUrl",
    originalUrl: null
  };
  mockAdapter.onPost("/api/new").reply(500, {
    message: "test error message",
    shortUrl: "testShortUrl"
  });
  await dispatch(sendNewUrl("http://www.lego.com"));
  const state = store.getState();
  expect(state).toEqual(EXPECTED_STATE);
});

it("should set correct state when getOriginalUrl is is successfull", async () => {
  const EXPECTED_STATE = {
    isBusy: false,
    hasAdded: false,
    hasFetched: true,
    hasError: false,
    message: null,
    shortUrl: null,
    originalUrl: "test url"
  };
  mockAdapter.onGet("/api/hello").reply(200, {
    originalUrl: "test url"
  });
  await dispatch(getOriginalUrl("hello"));
  const state = store.getState();
  expect(state).toEqual(EXPECTED_STATE);
});

it("should set correct state when getOriginalUrl is unsuccessfull", async () => {
  const EXPECTED_STATE = {
    isBusy: false,
    hasAdded: false,
    hasFetched: false,
    hasError: true,
    message: "test error message",
    shortUrl: null,
    originalUrl: null
  };
  mockAdapter.onGet("/api/hello").reply(500, {
    message: "test error message"
  });
  await dispatch(getOriginalUrl("hello"));
  const state = store.getState();
  expect(state).toEqual(EXPECTED_STATE);
});
