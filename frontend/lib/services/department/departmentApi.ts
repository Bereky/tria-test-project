import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const departmentApi = createApi({
  reducerPath: "departmentApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",
  }),
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => "department",
    }),
    getDepartmentById: builder.query<null, { id: string | string[] }>({
      query: ({ id }) => `department/${id}`,
    }),
  }),
});

export const { useGetDepartmentsQuery, useGetDepartmentByIdQuery } =
  departmentApi;
