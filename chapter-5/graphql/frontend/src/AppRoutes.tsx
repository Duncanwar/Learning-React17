// Dependencies
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Components
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import Error404 from "./pages/error404";

const AppRoutes = () => {
  <Router>
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/dashboard" Component={DashboardPage} />
      <Route path="/login" Component={LoginPage} />
      <Route Component={Error404} />
    </Routes>
  </Router>;
};

export default AppRoutes;
