import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
});

export default rootReducer;
