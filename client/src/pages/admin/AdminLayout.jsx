import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* sidebar / topbar here */}
      {/* <AdminSidebar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
