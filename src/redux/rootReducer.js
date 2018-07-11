import { combineReducers } from "redux";
import OrderReducer from "./Order/reducer";

export default combineReducers({
  order: OrderReducer,
});
