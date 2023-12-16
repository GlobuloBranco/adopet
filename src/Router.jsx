import { Routes, Route, ScrollRestoration } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Pet from "./pages/Pet";
import Signup from "./pages/Signup";
import User from "./pages/User";
import SignupOng from "./pages/SignupOng";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signup/ong" element={<SignupOng />}></Route>
      <Route path="/profile" element={<User />}></Route>
      <Route path="/pet" element={<Pet />}></Route>
    </Routes>
  );
}
