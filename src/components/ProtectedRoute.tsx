import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/localStorage';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = getToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
