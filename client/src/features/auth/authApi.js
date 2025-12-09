import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "./authSlice";
import config from "../../config/env";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      config.viteEnv === "production"
        ? `${config.prodServerUrl}/api/auth`
        : `${config.devServerUrl}/api/auth`,
    credentials: "include", // include cookies for httpOnly token
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const user = data.user;
          dispatch(setCredentials(user));
        } catch (err) {
          console.log(err.message);
        }
      },
    }),
    registerStudent: builder.mutation({
      query: (credentials) => ({
        url: "/register/student",
        method: "POST",
        body: credentials,
      }),
    }),
    registerRecruiter: builder.mutation({
      query: (credentials) => ({
        url: "/register/recruiter",
        method: "POST",
        body: credentials,
      }),
    }),
    verifyEmail: builder.query({
      query: (token) => `/verify-email?token=${token}`,
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());
          dispatch(authApi.util.resetApiState());
        } catch (err) {
          console.log(err.message);
        }
      },
    }),
    getMe: builder.query({
      query: () => "/me",
      providesTags: ["User"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const user = data.user;
          dispatch(setCredentials(user));
        } catch (err) {
          // If getMe fails (e.g., 401), we should probably ensure state is clear
          dispatch(logOut());
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterStudentMutation,
  useRegisterRecruiterMutation,
  useVerifyEmailQuery,
  useLogoutMutation,
  useGetMeQuery,
} = authApi;
