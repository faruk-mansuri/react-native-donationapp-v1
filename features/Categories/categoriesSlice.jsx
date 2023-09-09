import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesData: [
    {
      categoryId: 1,
      name: 'Highlight',
    },
    {
      categoryId: 2,
      name: 'Environment',
    },
    {
      categoryId: 3,
      name: 'Education',
    },
    {
      categoryId: 4,
      name: 'Clothing and Accessories',
    },
    {
      categoryId: 5,
      name: 'Household goods',
    },
    {
      categoryId: 6,
      name: 'Electronics',
    },
    {
      categoryId: 7,
      name: 'Toys and Games',
    },
    {
      categoryId: 8,
      name: 'Sports Equipment',
    },
    {
      categoryId: 9,
      name: 'Books and Media',
    },
    {
      categoryId: 10,
      name: 'Health and Beauty Products',
    },
    {
      categoryId: 11,
      name: 'Office supplies',
    },
    {
      categoryId: 12,
      name: 'Tools and Hardware',
    },
    {
      categoryId: 13,
      name: 'Art and Craft Supplies',
    },
  ],
  selectedCategoryId: 1,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },

    updateSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload.categoryId;
    },
  },
});

export const { resetCategories, updateSelectedCategoryId } =
  categoriesSlice.actions;

export default categoriesSlice.reducer; // contains state and the reducer function

// createSlice is a function that accepts an initial state, an object of reducer functions, and a slice name, and automatically generates action creators and action types that correspond to the reducers and categoriesSlice.reducer is the reducer function that handles the state updates for the categories slice, and categoriesSlice.actions is an object that contains all the action creators (method that change state) for the categories slice

// const INCREMENT = 'counter/increment'
// function increment(amount) {
//   return {
//     type: INCREMENT,
//     payload: amount,
//   }
// }

// Here, INCREMENT is the action type and increment is the action creator. You can use createAction from Redux Toolkit to simplify this process
