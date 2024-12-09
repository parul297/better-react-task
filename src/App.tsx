import React from "react";
import { Router, Routes, Route, Navigate } from "react-router";
import { createBrowserHistory } from "history";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router location={history.location} navigator={history}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;

