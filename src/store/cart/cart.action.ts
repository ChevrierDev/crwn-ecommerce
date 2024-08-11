import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, withMatcher, ActionWithPayload } from "../../utils/reducer/reducer.utils";

// Correction du typage pour setIsCartOpen
export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_DROPDOWN_OPEN, boolean>;

export const setIsCartOpen = withMatcher((isOpen: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_DROPDOWN_OPEN, isOpen)
);

// Correction du typage pour setCartItems
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

// Correction de la fonction addItemToCart
export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

// Correction de la fonction removeItemFromCart
export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

// Correction de la fonction clearItemFromCart
export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem): SetCartItems => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};

// Typage explicite des paramètres de addCartItem
const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Typage explicite des paramètres de removeCartItem
const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// Typage explicite des paramètres de clearCartItem
const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
