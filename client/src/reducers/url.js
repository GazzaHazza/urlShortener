import axios from "axios";

export function sendNewUrl(newUrl) {
  return dispatch => {
    dispatch(startUrlFetch());
    axios
      .post("/api/new", {
        url: newUrl
      })
      .then(function(response) {
        dispatch(urlAdded(response.data));
      })
      .catch(function(error) {
        dispatch(apiError(error.response.data));
      });
  };
}

export function getOriginalUrl(shortCode) {
  return dispatch => {
    dispatch(startUrlFetch());
    axios
      .get(`/api/${shortCode}`)
      .then(function(response) {
        dispatch(storeOriginalUrl(response.data));
      })
      .catch(function(error) {
        dispatch(apiError(error.response.data));
      });
  };
}

const START_FETCH_URL = "url.START_FETCH";
function startUrlFetch() {
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
  busy: false,
  added: false,
  fetched: false,
  error: false,
  message: null,
  shortUrl: null,
  originalUrl: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCH_URL:
      return { ...state, busy: true };
    case ADDED_NEW_URL:
      return {
        ...state,
        busy: false,
        added: true,
        shortUrl: action.data.shortUrl,
        originalUrl: action.data.originalUrl,
        message: action.data.message
      };
    case API_ERROR:
      return {
        ...state,
        busy: false,
        error: true,
        message: action.data.message
      };

    case STORE_ORIGINAL_URL:
      return {
        ...state,
        busy: false,
        originalUrl: action.data.originalUrl
      };

    default:
      return state;
  }
};
