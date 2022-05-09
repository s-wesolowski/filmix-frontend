const initialState = {
  backdrop_path: null,
  tvseries_backdrop: null,
  movies_backdrop: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_BACKDROP":
      return {
        ...state,
        backdrop_path: action.backdrop_path,
      };
    case "CHANGE_TVSERIES_BACKDROP": {
      return {
        ...state,
        tvseries_backdrop: action.backdrop_path,
      };
    }
    case "CHANGE_MOVIES_BACKDROP": {
      return {
        ...state,
        movies_backdrop: action.backdrop_path,
      };
    }
    case "SET_TVSERIES_BACKDROP": {
      if (state.backdrop_path === "") {
        return null;
      } else {
        return {
          ...state,
          backdrop_path: state.tvseries_backdrop,
        };
      }
    }
    case "SET_MOVIES_BACKDROP": {
      if (state.backdrop_path === "") {
        return null;
      } else {
        return {
          ...state,
          backdrop_path: state.movies_backdrop,
        };
      }
    }
    default:
      return state;
  }
};

export default reducer;
