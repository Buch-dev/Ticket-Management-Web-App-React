import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import TicketManagement from "./components/TicketManagement";
import { storage } from "./utils/storage";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = storage.get("ticketapp_session");
    if (session && session.token) {
      setUser(session.user);
      setCurrentPage("dashboard");
    }
  }, []);

  const handleAuth = () => {
    const session = storage.get("ticketapp_session");
    setUser(session.user);
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    storage.remove("ticketapp_session");
    setUser(null);
    setCurrentPage("landing");
  };

  const handleNavigate = (page) => {
    if (["dashboard", "tickets"].includes(page) && !user) {
      setCurrentPage("login");
      return;
    }
    setCurrentPage(page);
  };

  return (
    <div className="container-max">
      {currentPage === "landing" && <LandingPage onNavigate={handleNavigate} />}
      {currentPage === "login" && (
        <AuthPage
          mode="login"
          onNavigate={handleNavigate}
          onAuth={handleAuth}
        />
      )}
      {currentPage === "signup" && (
        <AuthPage
          mode="signup"
          onNavigate={handleNavigate}
          onAuth={handleAuth}
        />
      )}
      {currentPage === "dashboard" && user && (
        <Dashboard
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          user={user}
        />
      )}
      {currentPage === "tickets" && user && (
        <TicketManagement
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          user={user}
        />
      )}
    </div>
  );
}

export default App;
