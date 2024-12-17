import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  categories: ["all", "man", "women", "children"],
  activeCategory: "all",
  sortItems: [
    ["By Most Popular", "rating"],
    ["By Name", "name"],
    ["From Cheap", "price&order=asc"],
    ["From Expensive", "price&order=desc"],
  ],
  sortData: ["By Most Popular", "rating"],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setActiveCategory(state, { payload }) {
      state.activeCategory = payload.category;
    },
    setSortData(state, { payload }) {
      state.sortData = payload.sortItem;
    },
    setSearchValue(state, { payload }) {
      state.searchValue = payload.value;
    },
    setFilters(state, { payload }) {
      state.searchValue = payload.searchValue;
      state.activeCategory = payload.activeCategory;
      state.sortData = payload.sortData;
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setActiveCategory, setSortData, setSearchValue, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
