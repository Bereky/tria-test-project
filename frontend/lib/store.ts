import { configureStore } from "@reduxjs/toolkit";

import departmentReducer from "./features/department/departmentSlice";
import customerReducer from "./features/customer/customerSlice";
import { Api } from "./services/Api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      department: departmentReducer,
      customer: customerReducer,
      [Api.reducerPath]: Api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([Api.middleware]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
