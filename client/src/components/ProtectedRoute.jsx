import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Hook to get auth user

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/auth" />;
  }

  return children;
}
