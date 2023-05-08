import { RootState } from "./store";

export const productsList = (state: RootState) => state.productsSlice.products;
export const ordersList = (state: RootState) => state.ordersSlice.orders;
export const ordersIndicator = (state: RootState) =>
  state.ordersSlice.orderIndicator;
