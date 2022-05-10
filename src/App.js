import "./App.css";
import Header from "./component/Header/header";
import SignUp from "./component/SignUp";
import Login from "./component/Login/Login";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./component/DashBoard/DashBoard";
import ApiJS from "./component/Api/Api";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="Api" element={<ApiJS />} />
      </Routes>
    </div>
  );
}

export default App;
