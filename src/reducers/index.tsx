import { combineReducers } from "redux";
import {feedReducer} from "./FeedReducer"

/********
 * Combins all reducers
 * used in store
 *******/
export default combineReducers({
   feed:feedReducer,
  });
  