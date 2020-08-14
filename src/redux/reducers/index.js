import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "../reducers/categoryListReducer";
import productListReducer from "../reducers/productListReducer";
import cartReducer from "../reducers/cartReducer";
import 'alertifyjs/build/css/alertify.min.css';


const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  cartReducer
  
});

export default rootReducer;
