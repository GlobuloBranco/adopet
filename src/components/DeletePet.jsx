import { IoCloseOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

export default function DeletePet({ setDeletePet, idPet }) {
  const navigate = useNavigate();
  const handleDeletePet = () => {
    setDeletePet(false);
  };

  return (
    <div className="fixed flex items-center justify-center w-full min-h-screen bg-[rgba(0,0,0,0.4)]">
      <div className="relative flex flex-col items-center gap-6 px-20 py-10 mt-12 bg-white rounded-lg animate-zoomIn max-h-[80vh] overflow-y-scroll">
        <button
          onClick={() => {
            setDeletePet(false);
            document.body.style.overflow = "visible";
          }}
          className="absolute right-2 top-2">
          <IoCloseOutline size={40} />
        </button>
        <h1 className="text-xl">Deseja realmente deletar este pet?</h1>
        <div className="flex w-full gap-2">
          <button
            onClick={handleDeletePet}
            className="w-full col-span-2 px-5 py-1 text-xl font-semibold text-white bg-red-500 hover:bg-red-600">
            Deletar
          </button>
          <button
            onClick={() => setDeletePet(false)}
            className="w-full col-span-2 px-5 py-1 text-xl font-semibold text-white bg-slate-400 hover:bg-slate-500">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
