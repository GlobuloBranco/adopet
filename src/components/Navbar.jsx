import { FaUser, FaUserCircle } from "react-icons/fa";
import Logo from "../assets/adoptify-logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const idUser = localStorage.getItem("id_user");
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full px-4 py-4 bg-yellow-400">
      <div className="flex justify-between px-4">
        <button onClick={() => navigate("/")}>
          <img src={Logo} alt="logo" width={150} className="object-contain" />
        </button>
        <div className="flex gap-4 text-xl">
          {/* <button>Sobre nós</button> */}
          {!idUser && (
            <button
              onClick={() => navigate("/login")}
              className="p-2 px-4 bg-white rounded">
              Login
            </button>
          )}
          <button onClick={() => navigate("/profile")}>
            <FaUserCircle size={40} fill="#000" />
          </button>
        </div>
      </div>
    </div>
  );
}
