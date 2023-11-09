import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboards from "./Dashboards";
import OtpVarification from "./components/login/OtpVarification";
import AddAgent from "./components/addAgent/AddAgent";
import AddUser from "./components/addUser/AddUser";
import AddPoints from "./components/addPoints/AddPoints";
import RemovePoints from "./components/removePoints/RemovePoints";
import DeleteUser from "./components/deleteUser/DeleteUser";
import DeleteAgent from "./components/deleteAgent/DeleteAgent";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Dashboards/> */}
        <Route index element={<LoginPage />} />
        <Route path="otp" element={<OtpVarification />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-agent" element={<AddAgent />} />
        <Route path="add-user" element={<AddUser/>} />
        <Route path="add-points" element={<AddPoints/>} />
        <Route path="remove-points" element={<RemovePoints/>} />
        <Route path="delete-user" element={<DeleteUser/>} />
        <Route path="delete-agent" element={<DeleteAgent/>} />
        <Route path="demo" element={<Dashboards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
