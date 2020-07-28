import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "../reducers/categoryListReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
});

export default rootReducer;
