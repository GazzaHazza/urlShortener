const SUGGESTED_PLACE_SELECTED = "suggestedPlace.PLACE_SELECTED";
export const selectSuggestedPlace = place => {
  const formattedPlace = {
    label: place.label,
    lat: place.location.lat,
    lng: place.location.lng
  };
  return { type: SUGGESTED_PLACE_SELECTED, place: formattedPlace };
};

const INITIAL_STATE = {
  loading: false,
  error: false,
  message: null,
  shortUrl: null,
  originalUrl: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUGGESTED_PLACE_SELECTED:
      return { ...state, selectedPlace: action.place };

    default:
      return state;
  }
};
