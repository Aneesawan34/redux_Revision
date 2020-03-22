import { combineReducers } from "redux";
import Name from "./Name";
import { Wishes } from "./Wishes";
const rootReducer = combineReducers({
  name: Name,
  wishes: Wishes
});

export default rootReducer;
