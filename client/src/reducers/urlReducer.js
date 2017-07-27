import axios from "axios";

export function sendNewUrl(newUrl) {
  return dispatch => {
    dispatch(startUrlFetch());
    return axios
      .post("/api/new", {
        url: newUrl
      })
      .then(response => {
        dispatch(urlAdded(response.data));
      })
      .catch(error => {
        dispatch(apiError(error.response.data));
      });
  };
}

export function getOriginalUrl(shortCode) {
  return dispatch => {
    dispatch(startUrlFetch());
    console.log("jiejvo");
    return axios
      .get(`/api/${shortCode}`)
      .then(response => {
        dispatch(storeOriginalUrl(response.data));
      })
      .catch(error => {
        dispatch(apiError(error.response.data));
      });
  };
}

const START_FETCH_URL = "url.START_FETCH";
export function startUrlFetch() {
  return {
    type: START_FETCH_URL
  };
}

const ADDED_NEW_URL = "url.ADDED_NEW";
function urlAdded(data) {
  return {
    type: ADDED_NEW_URL,
    data
  };
}

const STORE_ORIGINAL_URL = "url.STORE_ORIGINAL";
function storeOriginalUrl(data) {
  return {
    type: STORE_ORIGINAL_URL,
    data
  };
}

const API_ERROR = "url.API_ERROR";
function apiError(errorData) {
  return {
    type: API_ERROR,
    data: errorData
  };
}

const INITIAL_STATE = {
  isBusy: false,
  hasAdded: false,
  hasFetched: false,
  hasError: false,
  message: null,
  shortUrl: null,
  originalUrl: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCH_URL:
      return { ...state, isBusy: true };
    case ADDED_NEW_URL:
      return {
        ...state,
        isBusy: false,
        hasAdded: true,
        shortUrl: action.data.shortUrl,
        originalUrl: action.data.originalUrl,
        message: action.data.message
      };
    case API_ERROR:
      return {
        ...state,
        isBusy: false,
        hasError: true,
        hasAdded: false,
        message: action.data.message
      };

    case STORE_ORIGINAL_URL:
      return {
        ...state,
        isBusy: false,
        hasFetched: true,
        originalUrl: action.data.originalUrl
      };

    default:
      return state;
  }
};
