import { combineReducers } from "redux";

import { UserReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
