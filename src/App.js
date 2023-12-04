import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboards from "./Dashboards";
import OtpVarification from "./components/login/OtpVarification";
import AddAdminAgent from "./components/AdminAgent/AddAdminAgent";
import AllAdminAgent from "./components/AdminAgent/AllAdminAgent";
import AllUser from "./components/User/AllUser";
import UserDetails from './components/User/UserDetails';
import AdminAgentDetails from "./components/AdminAgent/AdminAgentDetails";
import AddAgent from "./components/Agent/AddAgent";
import AllAgent from "./components/Agent/AllAgent";
import AgentDetails from "./components/Agent/AgentDetails";
import AddBankDetail from "./components/AdminBank/AddBankDetail";
import AllBankDetail from "./components/AdminBank/AllBankDetail";
import AddBalance from "./components/User/AddBalance";
import ReduceBalance from "./components/User/ReduceBalance";
import BankDetail from "./components/AdminBank/BankDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Dashboards/> */}
        <Route index element={<LoginPage />} />
        <Route path="otp" element={<OtpVarification />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="all-user" element={<AllUser/>} />
        <Route path="add-balance" element={<AddBalance/>} />
        <Route path="reduce-balance" element={<ReduceBalance/>} />
        <Route path="/user-details/:userName" element={<UserDetails />} />
        <Route path="add-admin-agent" element={<AddAdminAgent />} />
        <Route path="all-admin-agent" element={<AllAdminAgent />} />
        <Route path="admin-agent-details/:userName" element={<AdminAgentDetails />} />
        <Route path="add-agent" element={<AddAgent />} />
        <Route path="all-agent" element={<AllAgent />} />
        <Route path="/agent-details/:userName" element={<AgentDetails />} />
        <Route path="/admin-bank-details" element={<AddBankDetail />} />
        <Route path="/admin-bank-details/:bankAccountNumber" element={<BankDetail />} />
        <Route path="/admin-all-bank-details" element={<AllBankDetail />} />
        <Route path="demo" element={<Dashboards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
