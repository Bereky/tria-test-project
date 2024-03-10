import { configureStore } from "@reduxjs/toolkit";

import departmentRducer from "./features/department/departmentSlice";
import { departmentApi } from "./services/department/departmentApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const makeStore = () => {
  return configureStore({
    reducer: {
      department: departmentRducer,
      [departmentApi.reducerPath]: departmentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat([departmentApi.middleware]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
