// we combined all the reducer in index.js file
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReduce";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
export default reducers;
