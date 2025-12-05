import { Outlet } from "react-router-dom";

export default function RecruiterLayout() {
  return (
    <div className="min-h-screen flex bg-background">
      {/* sidebar / topbar here */}
      {/* <RecruiterSidebar /> */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
