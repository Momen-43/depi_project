import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute, AdminRoute } from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgetPassword";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Appointment from "./pages/Appointment";
import Unauthorized from "./pages/Unauthorized";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageAppointments from "./pages/admin/ManageAppointments";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#1e293b",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
            },
            success: {
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ef4444",
                secondary: "#fff",
              },
            },
          }}
        />

        <Routes>
          {/* ============ PUBLIC ROUTES ============ */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* ============ PROTECTED USER ROUTES ============ */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          />

          {/* ============ ADMIN ONLY ROUTES ============ */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <ManageUsers />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/appointments"
            element={
              <AdminRoute>
                <ManageAppointments />
              </AdminRoute>
            }
          />

          {/* ============ CATCH ALL ============ */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;