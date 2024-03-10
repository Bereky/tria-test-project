import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Department = {
  id: string;
  name: string;
  description: string;
  managingDepartmentId: string;
  createdAt: string;
};

interface DepartmentState {
  departments: [];
  current: {};
}

const initialState: DepartmentState = {
  departments: [],
  current: {},
};

export const department = createSlice({
  name: "department",
  initialState,
  reducers: {
    resetDepartment: () => initialState,
    setDepartments: (state, action: PayloadAction<[]>) => {
      state.departments = action.payload;
    },
    setCurrent: (state, action: PayloadAction<Department>) => {
      state.current = action.payload;
    },
  },
});

export const { resetDepartment, setDepartments, setCurrent } =
  department.actions;
export default department.reducer;
