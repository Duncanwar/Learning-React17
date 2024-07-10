// Dependencies
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import HomePage from "./pages/home";
import DashboardPage from "./pages/dashboard";
import LoginPage from "./pages/login";
import Error404 from "./pages/error404";
import Try from "./pages/Try";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Try />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage currentUrl={""} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
