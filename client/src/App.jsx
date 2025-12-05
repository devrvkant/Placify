import { Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";
import NotFound from "./pages/NotFound";
import RegisterSelector from "./pages/auth/RegisterSelector";
import RegisterStudent from "./pages/auth/RegisterStudent";
import RegisterRecruiter from "./pages/auth/RegisterRecruiter";
import RequireAuth from "./components/auth/RequireAuth";
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentJobs from "./pages/student/StudentJobs";
import StudentJobDetails from "./pages/student/StudentJobDetails";
import StudentTests from "./pages/student/StudentTests";
import RecruiterLayout from "./pages/recruiter/RecruiterLayout";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<RegisterSelector />} />
      <Route path="/auth/register/student" element={<RegisterStudent />} />
      <Route path="/auth/register/recruiter" element={<RegisterRecruiter />} />
      <Route path="/auth/verify-email" element={<VerifyEmail />} />

      {/* Protected Routes */}
      {/* 1. Protected Student */}
      <Route
        path="/student"
        element={
          <RequireAuth allowedRoles={["student"]}>
            <StudentLayout />
          </RequireAuth>
        }
      >
        {/* /student  -> default page */}
        {/* StudentDashboard just the default view of the entire container studentlayout(dashboard) not the entire dashboard view. */}
        <Route index element={<StudentDashboard />} />
        {/* /student/dashboard (optional alias) */}
        <Route path="dashboard" element={<StudentDashboard />} />
        {/* /student/jobs */}
        <Route path="jobs" element={<StudentJobs />} />
        {/* /student/jobs/123 */}
        <Route path="jobs/:jobId" element={<StudentJobDetails />} />
        {/* /student/assessments */}
        <Route path="assessments" element={<StudentTests />} />
      </Route>
      {/* 2. Protected Recruiter */}
      <Route
        path="/recruiter"
        element={
          <RequireAuth allowedRoles={["recruiter"]}>
            <RecruiterLayout />
          </RequireAuth>
        }
      >
        <Route index element={<RecruiterDashboard />} />
        {/* recruiter/jobs, recruiter/tests, etc */}
      </Route>
      {/* 3. Protected Admin */}
      <Route
        path="/admin"
        element={
          <RequireAuth allowedRoles={["admin"]}>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<AdminDashboard />} />
        {/* admin/students, admin/tests, admin/recruiters, etc */}
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
