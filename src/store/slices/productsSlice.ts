import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../actions/productsActions";
import { IProduct } from "../../types/types";

export interface IProductsSlice {
  products: IProduct[];
  filteredProducts: IProduct[];
}

const initialState: IProductsSlice = {
  products: [],
  filteredProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.filteredProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload;
      }
    );
  },
});

export default productsSlice.reducer;
export const { changeFilteredProducts } = productsSlice.actions;
