import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "../reducers/categoryListReducer";
import productListReducer from "../reducers/productListReducer";
import 'alertifyjs/build/css/alertify.min.css';


const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer
});

export default rootReducer;
