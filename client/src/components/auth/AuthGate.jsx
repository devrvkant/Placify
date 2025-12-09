import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetMeQuery } from "../../features/auth/authApi";
import { clearCredentials, hydrateUserFromStorage, selectIsHydrated, setCredentials, setHydrated, selectIsLoggedOut } from "../../features/auth/authSlice";

export function AuthGate({ children }) {
  const dispatch = useDispatch();
  const hydrated = useSelector(selectIsHydrated);
  const isLoggedOut = useSelector(selectIsLoggedOut);

  // Hydrate Redux from localStorage (instant UI)
  useEffect(() => {
    dispatch(hydrateUserFromStorage());
    dispatch(setHydrated(true));
  }, [dispatch]);

  // Silent /auth/me in background AFTER hydration
  const { data, isError } = useGetMeQuery(undefined, {
    skip: !hydrated || isLoggedOut, // don't fire until we've hydrated, AND skip if strictly logged out
  });

  useEffect(() => {
    if (!hydrated) return;

    if (data) {
      // If your /auth/me returns { user: {...} } adjust accordingly
      const user = data.user || data;
      dispatch(setCredentials(user));
      localStorage.setItem("user", JSON.stringify(user));
    } else if (isError) {
      dispatch(clearCredentials());
      localStorage.removeItem("user");
    }
  }, [hydrated, data, isError, dispatch]);

  // ️Always render children – no blocking loader
  return children;
}
