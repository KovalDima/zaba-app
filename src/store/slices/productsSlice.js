import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, { rejectWithValue }) => {
    const apiUrl = "https://66dd6f1af7bcc0bbdcde184c.mockapi.io/zaba-api";
    let { page = 1, category = "", sortBy = "", searchValue = "" } = params;

    category = category === "all" ? "" : category;
    sortBy = sortBy || "";

    try {
      const response = await fetch(
        `${apiUrl}/t-shirts?category=${category}&sortBy=${sortBy}&name=${searchValue}&page=${page}&limit=6`
      );
      const data = await response.json();
      if (data === "Not found") {
        return [];
      }
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong...");
    }
  }
);

const initialState = {
  items: [],
  page: 1,
  isMoreItems: false,
  loading: false,
  error: null,
  cache: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetProducts(state) {
      state.items = [];
      state.page = 1;
      state.isMoreItems = false;
      state.loading = true;
    },
    loadFromCache(state, { payload }) {
      state.items = state.cache[payload.cacheKey].items;
      state.isMoreItems = state.cache[payload.cacheKey].isMoreItems;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, { meta, payload }) => {
        const { category, sortBy, searchValue } = meta.arg;
        const cacheKey = `${category}_${sortBy}_${searchValue}`;

        state.cache[cacheKey] = {
          items: meta.arg.page === 1 ? payload : [...state.items, ...payload],
          isMoreItems: payload.length === 6,
        };

        state.page += 1;
        productsSlice.caseReducers.loadFromCache(state, {
          payload: { cacheKey },
        });
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectProducts = (state) => state.products;

export const { resetProducts, loadFromCache } = productsSlice.actions;
export { fetchProducts };
export default productsSlice.reducer;
