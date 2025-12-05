import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isProfileComplete: false,
  // We don't strictly need to store the token in Redux if it's in an httpOnly cookie,
  // For this implementation, we'll rely on the user object presence as the source of truth for "logged in client-side".
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, isProfileComplete } = action.payload;
      state.user = user;
      state.isAuthenticated = true;
      state.isProfileComplete = isProfileComplete;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isProfileComplete = false;
    },
    // Optional: update user profile data without full re-login
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    // Optional: update profile completion status
    setProfileComplete: (state, action) => {
      state.isProfileComplete = action.payload;
    },
  },
});

export const { setCredentials, logOut, updateUser, setProfileComplete } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsProfileComplete = (state) => state.auth.isProfileComplete;
