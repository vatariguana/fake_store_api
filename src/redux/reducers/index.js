import { combineReducers } from "redux";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
import shoppingCartReducer from "./shoppingCart.reducer";
const rootReducer = combineReducers({
  productReducer,
  categoryReducer,
  shoppingCartReducer,
});

export default rootReducer;
