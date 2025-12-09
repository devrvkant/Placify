import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  isHydrated: false,
  isLoggedOut: false,
  // We don't strictly need to store the token in Redux if it's in an httpOnly cookie,
  // For this implementation, we'll rely on the user object presence as the source of truth for "logged in client-side".
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    hydrateUserFromStorage: (state) => {
      try {
        const stored = localStorage.getItem("user");
        if (stored) {
          const user = JSON.parse(stored);
          state.user = user;
          state.isAuthenticated = true;
          state.isLoggedOut = false;
        } else {
          state.user = null;
          state.isAuthenticated = false;
        }
      } catch {
        state.user = null;
        state.isAuthenticated = false;
      }
    },
    setHydrated: (state, action) => {
      const hydrated = action.payload;
      state.isHydrated = hydrated;
    },
    setCredentials: (state, action) => {
      const user = action.payload;
      state.user = user;
      state.isAuthenticated = true;
      state.isLoggedOut = false;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoggedOut = true;
    },
    // Optional: update user profile data without full re-login
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const {
  hydrateUserFromStorage,
  setHydrated,
  setCredentials,
  clearCredentials,
  logOut,
  updateUser,
  setProfileComplete,
} = authSlice.actions;

export default authSlice.reducer;

export const selectIsHydrated = (state) => state.auth.isHydrated;
export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsProfileComplete = (state) => state.auth.isProfileComplete;
export const selectIsLoggedOut = (state) => state.auth.isLoggedOut;
