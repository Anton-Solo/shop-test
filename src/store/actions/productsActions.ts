import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase";
import { child, get, ref } from "firebase/database";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const snapshot = await get(child(ref(db), "products"));
    const products = snapshot.val();

    return products;
  } catch (e) {
    console.log(e);
  }
});
