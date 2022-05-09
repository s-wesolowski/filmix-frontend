import { combineReducers } from "redux";
import mediaDetails from "./mediaDetails/reducer";
import userData from "./userData/reducer";
import collection from "./collection/reducer";
import backdrop from "./backdrop/reducer";

const reducers = combineReducers({
  mediaDetails,
  userData,
  collection,
  backdrop,
});

export default reducers;
