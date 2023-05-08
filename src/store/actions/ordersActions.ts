import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { child, get, ref } from "firebase/database";

export const fetchOrders = createAsyncThunk("fetchOrders", async () => {
  try {
    const snapshot = await get(child(ref(db), "orders"));
    let orders = snapshot.val();

    if (!Array.isArray(orders)) {
      orders = Object.values(orders);
    }

    return orders;
  } catch (e) {
    console.log(e);
  }
});
