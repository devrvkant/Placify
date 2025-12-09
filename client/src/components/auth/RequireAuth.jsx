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

  // 1. Not authenticated -> go to login
  if (!user || !isAuthenticated) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // 2. Authenticated but role not allowed -> send to their home dashboard
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const target = ROLE_HOME[user.role] || "/";
    return <Navigate to={target} replace />;
  }

  // 3. All good -> render nested routes
  return <Outlet />;
};

export default RequireAuth;
