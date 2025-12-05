import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectIsAuthenticated } from "../../features/auth/authSlice";

const ROLE_HOME = {
  student: "/student",
  recruiter: "/recruiter",
  admin: "/admin",
};

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  // const isLoading = useSelector(selectAuthLoading); // true while /auth/me is running

  // // 1. Still checking auth from backend -> show loader, don't redirect yet
  // if (isLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
  //       <p className="text-sm text-muted-foreground">Checking your session...</p>
  //     </div>
  //   );
  // }

  // 2. Not authenticated -> go to login
  if (!user || !isAuthenticated) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // 3. Authenticated but role not allowed -> send to their home dashboard
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const target = ROLE_HOME[user.role] || "/";
    return <Navigate to={target} replace />;
  }

  // 4. All good -> render nested routes
  return <Outlet />;
};

export default RequireAuth;
