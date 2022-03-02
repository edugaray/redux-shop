import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import productApi  from './productApi';
import axios from 'axios';

export const fetchData = createAsyncThunk(
	'products/fetchProducts',
	async () => {const url = './data.json';
	try {
		const response = await axios.get(url);
		console.log('from slice', response.data);
		return response.data;
	} catch (err) {
		console.log(err);
	}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		prodData: {},
		status: 'idle'
	},
	reducers: {
		filterBottoms: (state) => {
			fetchData();
			const filtered = state.filter(
				(currentValue) => currentValue.category === 'bottoms'
			);
			state.prodData = filtered;
			state.prodFilter = 'bottoms';
		},
		filterTops: (state) => {
			fetchData();
			const filtered = state.filter(
				(currentValue) => currentValue.category === 'tops'
			);
			state.prodData = filtered;
			state.prodFilter = 'tops';
		},
		filterDresses: (state) => {
			fetchData();
			const filtered = state.filter(
				(currentValue) => currentValue.category === 'dresses'
			);
			state.prodData = filtered;
			state.prodFilter = 'dresses';
		},
		filterHats: (state) => {
			fetchData();
			const filtered = state.filter(
				(currentValue) => currentValue.category === 'hats'
			);
			state.prodData = filtered;
			state.prodFilter = 'hats';
		},
		filterRompers: (state) => {
			fetchData();
			const filtered = state.filter(
				(currentValue) => currentValue.category === 'rompers'
			);
			state.prodData = filtered;
			state.prodFilter = 'rompers';
		},
		filterShoes: (state) => {
			fetchData();
			const filtered = state.filter(
				(currentValue) => currentValue.category === 'shoes'
			);
			state.prodData = filtered;
			state.prodFilter = 'shoes';
		},
		filterFun: (state) => {
			fetchData();
			const filtered = state.filter(
				(currentValue) => currentValue.category === 'fun'
			);
			state.prodData = filtered;
			state.prodFilter = 'fun';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
			state.status = 'loading';
		})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.prodData = action.payload;
			})
	},
});

export const { filterBottoms, filterTops, filterDresses, filterRompers, filterHats, filterShoes, filterFun } = productsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`


export const productData = (state) => state.prodData;
export default productsSlice.reducer;
