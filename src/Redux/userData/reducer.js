const initialState = {
  userData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERDATA": {
      return {
        ...state,
        userData: action.data,
      };
    }
    default:
      return state;
  }
};

export default reducer;
