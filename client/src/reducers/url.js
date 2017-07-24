import axios from "axios";

export function sendNewUrl(newUrl) {
  return dispatch => {
    dispatch(startAddingNewUrl());
    axios
      .post("/api/new", {
        url: newUrl
      })
      .then(function(response) {
        console.log("response", response);
        dispatch(urlAdded(response.data));
      })
      .catch(function(error) {
        dispatch(apiError(error.response.data));
        console.log("error", error.response);
      });
  };
}
const START_ADD_NEW_URL = "url.START_ADD_NEW";
function startAddingNewUrl() {
  return {
    type: START_ADD_NEW_URL
  };
}

const ADDED_NEW_URL = "url.NEW_ADDED";
function urlAdded(data) {
  return {
    type: ADDED_NEW_URL,
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
    case START_ADD_NEW_URL:
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
        message: action.data.error
      };

    default:
      return state;
  }
};
