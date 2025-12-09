// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useGetMeQuery } from "../../features/auth/authApi";

export function AuthGate({ children }) {
  // const dispatch = useDispatch();
  // const authStatus = useSelector((state) => state.auth.status);

  // const [hydrated, setHydrated] = useState(false);

  // 1️⃣ Hydrate from localStorage first
  // useEffect(() => {
  //   dispatch(hydrateUserFromStorage());
  //   setHydrated(true);
  // }, [dispatch]);

  // 2️⃣ Call /auth/me only AFTER hydration
  const { isLoading } = useGetMeQuery();


  // 3️⃣ Block UI until auth is resolved
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-sm text-muted-foreground">Loading Placify...</p>
      </div>
    );
  }

  return children;
}
