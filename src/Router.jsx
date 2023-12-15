import { Routes, Route, ScrollRestoration } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/HOme";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/inicio" element={<Home />}></Route>
    </Routes>
  );
}