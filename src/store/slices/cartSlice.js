import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeItemCount(state, { payload }) {
      const item = payload.item;
      const id = item.id;

      if (state.items[id]) {
        state.items[id].count += item.count;
      } else {
        state.items[id] = item;
      }

      if (state.items[id].count === 0) {
        delete state.items[id];
      }

      state.totalPrice += item.price;
      state.totalCount += item.count;
    },
    clearItems(state) {
      state.items = {};
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cart;

export const { changeItemCount, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
