import { FaUser } from "react-icons/fa";
import Marca from "../assets/marca.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full px-4 py-4 bg-yellow-400">
      <div className="flex justify-between px-4">
        <button onClick={() => navigate("/")}>
          <img src={Marca} alt="logo" width={180} className="object-contain" />
        </button>
        <div className="flex gap-4 text-xl">
          <button>Sobre nós</button>
          <button
            onClick={() => navigate("/login")}
            className="p-2 px-4 bg-white rounded">
            Login
          </button>
          <button onClick={() => navigate("/profile")}>
            <FaUser />
          </button>
        </div>
      </div>
    </div>
  );
}
