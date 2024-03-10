import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Customer = {
  id: string;
  name: string;
  address: string;
  email: string;
  createdAt: string;
};

interface CustomerState {
  customers: [];
  current: {};
}

const initialState: CustomerState = {
  customers: [],
  current: {},
};

export const customer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    resetCustomer: () => initialState,
    resetCurrentCustomer: (state) => {
      state.current = {};
    },
    setCustomers: (state, action: PayloadAction<[]>) => {
      state.customers = action.payload;
    },
    setCurrentCustomer: (state, action: PayloadAction<Customer>) => {
      state.current = action.payload;
    },
  },
});

export const {
  resetCustomer,
  setCustomers,
  setCurrentCustomer,
  resetCurrentCustomer,
} = customer.actions;
export default customer.reducer;
