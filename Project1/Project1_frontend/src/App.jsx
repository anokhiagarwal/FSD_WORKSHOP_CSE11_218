import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import EditDetails from "./pages/EditDetails";

import "./App.css";

function App() {

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const loginUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <BrowserRouter>

      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={
            <Navigate to="/login" replace />
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <Login
              currentUser={currentUser}
              onLogin={loginUser}
            />
          }
        />

        {/* Signup */}
        <Route
          path="/signup"
          element={
            <Signup />
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            currentUser ? (
              <Dashboard
                currentUser={currentUser}
                onLogout={logoutUser}
              />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />

        {/* Edit Details */}
        <Route
          path="/edit/:id"
          element={
            currentUser ? (
              <EditDetails
                currentUser={currentUser}
              />
            ) : (
              <Navigate
                to="/login"
                replace
              />
            )
          }
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;