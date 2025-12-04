export const requirePermission = (permission) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user) {
      return res
        .status(401)
        .json({ message: "Not authenticated (no user on request)!" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Admins only!" });
    }

    const { adminProfile } = user;

    if (adminProfile?.superAdmin) {
      // super admin can do everything
      return next();
    }

    const hasPermission =
      Array.isArray(adminProfile?.permissions) &&
      adminProfile.permissions.includes(permission);

    if (!hasPermission) {
      return res
        .status(403)
        .json({ message: `Missing permission: ${permission}!` });
    }

    next();
  };
};
