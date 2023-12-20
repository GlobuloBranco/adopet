import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="absolute flex items-center gap-2 text-yellow-500 top-3 left-5">
      <IoArrowBackCircle size={30} />
      <span>Voltar para a página inicial</span>
    </button>
  );
}
