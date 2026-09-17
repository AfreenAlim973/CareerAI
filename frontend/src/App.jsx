import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Assessment from "./pages/Assessment";
import Result from "./pages/Result";
import Careers from "./pages/Careers";
import Roadmap from "./pages/Roadmap";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Colleges from "./pages/Colleges";
import CareerDetails from "./pages/CareerDetails";
import Opportunities from "./pages/Opportunities";

function App() {
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element = {<Home />} />

        <Route path="/login" element = {<Login />} />

        <Route path="/register" element = {<Register />} />

        <Route path="/dashboard" element = {<Dashboard />} />

        <Route path="/profile" element = {<Profile />} />

        <Route path="/assessment" element={<Assessment />} />

        <Route path="/result" element={<Result />} />

        <Route path="/careers" element={<Careers />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route
        path="/reset-password/:token"
        element={<ResetPassword />}
        />

        <Route path="/colleges" element={<Colleges />} />

        <Route path="/career-details" element={<CareerDetails />} />

        <Route path="/opportunities" element={<Opportunities />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;