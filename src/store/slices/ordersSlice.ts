import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../types/types";
import { fetchOrders } from "../actions/ordersActions";

export interface IOrdersSlice {
  orders: IOrder[];
  orderIndicator: boolean;
}

const initialState: IOrdersSlice = {
  orders: [],
  orderIndicator: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    changeOrderIndicator: (state, action: PayloadAction<boolean>) => {
      state.orderIndicator = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchOrders.fulfilled,
      (state, action: PayloadAction<IOrder[]>) => {
        state.orders = action.payload;
      }
    );
  },
});

export default ordersSlice.reducer;
export const { changeOrderIndicator } = ordersSlice.actions;
