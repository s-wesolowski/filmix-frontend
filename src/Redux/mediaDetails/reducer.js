const initialState = {
  mediaDetailsActive: false,
  mediaType: null,
  mediaId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MEDIADETAILS": {
      return {
        ...state,
        mediaDetailsActive: true,
        mediaType: action.mediaType,
        mediaId: action.mediaId,
      };
    }
    case "CLOSE_MEDIADETAILS": {
      return {
        ...state,
        mediaDetailsActive: false,
        mediaType: null,
        mediaId: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
