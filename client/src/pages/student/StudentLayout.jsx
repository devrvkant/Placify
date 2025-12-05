import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* sidebar / topbar here */}
      {/* <StudentSidebar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
