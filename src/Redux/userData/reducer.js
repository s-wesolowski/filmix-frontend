import jwt_decode from "jwt-decode";

const initialState = {
  user:
    localStorage.getItem("access") || sessionStorage.getItem("access")
      ? jwt_decode(
          localStorage.getItem("access") || sessionStorage.getItem("access")
        )
      : null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERDATA": {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};

export default reducer;
