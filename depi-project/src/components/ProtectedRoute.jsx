import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Basic auth protection
export const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Admin-only route
export const AdminRoute = ({ children }) => {
  const { currentUser, userRole } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== 'admin') {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

// User-only route (exclude admins if needed)
export const UserRoute = ({ children }) => {
  const { currentUser, userRole } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (userRole !== 'user') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children;
};