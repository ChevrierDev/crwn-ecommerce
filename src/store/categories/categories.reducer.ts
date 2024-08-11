import { AnyAction } from "redux-saga";

import { Category } from "./category.types";


import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

export type CategoriesState = {
  readonly categoriesMap: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categoriesMap: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }
  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categoriesMap: action.payload, isLoading: false };
  }
  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }
  return state
};
