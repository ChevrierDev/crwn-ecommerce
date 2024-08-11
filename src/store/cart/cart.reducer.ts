
import { AnyAction } from "redux-saga";
import { setIsCartOpen, setCartItems } from "./cart.action";

import { CartItem } from "./cart.types";

export type CartState = {
  readonly isDropdown: boolean;
  readonly cartItems: CartItem[]
}

export const INITIAL_STATE: CartState = {
  isDropdown: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isDropdown: action.payload,
    }
  }
  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
