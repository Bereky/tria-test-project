import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
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
    getCustomers: builder.query({
      query: () => "customer",
    }),
    getCustomerById: builder.query<null, { id: string | string[] }>({
      query: ({ id }) => `customer/${id}`,
    }),
  }),
});

export const {
  useGetDepartmentsQuery,
  useGetDepartmentByIdQuery,
  useGetCustomersQuery,
  useGetCustomerByIdQuery,
} = Api;
