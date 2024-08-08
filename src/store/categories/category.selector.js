import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesMap = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) =>
    categoriesSlice.categoriesMap
      ? categoriesSlice.categoriesMap.reduce((acc, category) => {
          const { title, items } = category;
          acc[title.toLowerCase()] = items;
          return acc;
        }, {})
      : {}
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
