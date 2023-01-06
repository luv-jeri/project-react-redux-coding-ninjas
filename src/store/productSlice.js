import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1/';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
  loading: false,
  offset: 0,
  limit: 7,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (parameters, store) => {
    const { offset, limit } = store.getState().products;
    const { limit: limitToUse, offset: offsetToUse } = parameters || {};
    const response = await axios.get(
      `products?limit=${limitToUse || limit}&offset=${offsetToUse || offset}`
    );

    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data.push(action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.offset += state.limit;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts, setError, setLoading, setStatus } = productSlice.actions;
export default productSlice.reducer;

// const fetchProducts = ({ limit, offset }) => {
//   return async (dispatch, getState) => {
//     const { products } = getState();
//     const { offset: currentOffset, limit: currentLimit } = products;

//     const limitToUse = limit || currentLimit;
//     const offsetToUse = offset || currentOffset;

//     dispatch(setLoading(true));

//     try {
//       const response = await axios.get(
//         `products?limit=${limitToUse}&offset=${offsetToUse}`
//       );
//       dispatch(setProducts(response.data));
//     } catch (error) {
//       dispatch(setError(error.message));
//     }
//     dispatch(setLoading(false));
//   };
// };

// export { fetchProducts };
