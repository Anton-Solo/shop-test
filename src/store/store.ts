import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import ordersSlice from "./slices/ordersSlice";

const rootReducer = combineReducers({
  productsSlice,
  ordersSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
