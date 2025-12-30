import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
