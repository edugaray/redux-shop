import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
	loading: false,
	hasErrors: false,
};

const APIurl = './data.json';

// A slice for products with our 3 reducers
const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		getProducts: (state) => {
			state.loading = true;
		},
		getProductsSuccess: (state, { payload }) => {
			state.products = payload;
			state.loading = false;
			state.hasErrors = false;
		},
		getProductsFailure: (state) => {
			state.loading = false;
			state.hasErrors = true;
		},
	},
});

// Export slice actions
export const { getProducts, getProductsSuccess, getProductsFailure } = productsSlice.actions;

// A selector
export const productsSelector = (state) => state.products;

// The reducer
export default productsSlice.reducer;

// Async thunk action
export function fetchProducts() {
	return async (dispatch) => {
		dispatch(getProducts());

    try {
      const response = await axios.get(APIurl);
			dispatch(getProductsSuccess(response.data));
		} catch (error) {
			dispatch(getProductsFailure());
		}
	};
}