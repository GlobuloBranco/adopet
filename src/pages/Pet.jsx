import Gato from "../assets/gato.png";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";
import {
  FaPaw,
  FaCat,
  FaHandHoldingMedical,
  FaRegCalendarAlt,
  FaDog,
  FaCheck,
} from "react-icons/fa";
import { FaLocationDot, FaPerson } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { IoMdPerson } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import EditPet from "../components/EditPet";
import DeletePet from "../components/DeletePet";

export default function Pet() {
  const navigate = useNavigate();
  const location = useLocation();
  const [petData, setPetData] = useState({});
  const [editPet, setEditPet] = useState(false);
  const [deletePet, setDeletePet] = useState(false);
  const [solicitado, setSolicitado] = useState(false);
  const idUser = localStorage.getItem("id_user");
  const idPet = location.state.id;
  useEffect(() => {
    axios
      .get(`http://localhost:3000/pets`)
      .then((res) => {
        console.log(res.data);
        setPetData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [editPet]);

  return (
    <>
      <Navbar />
      {editPet && (
        <EditPet setEditPet={setEditPet} petData={petData} idPet={idPet} />
      )}
      {deletePet && <DeletePet setDeletePet={setDeletePet} idPet={idPet} />}
      <main className="flex items-center justify-center min-h-screen bg-[url('./assets/bg-pet.jpg')] bg-cover">
        <div className="flex flex-col items-center gap-6 px-16 py-10 mt-20 bg-white rounded-lg shadow-2xl max-h-[80vh] overflow-y-scroll">
          <img
            src={petData.IMG_PET}
            alt="Pet Image"
            width={200}
            className="rounded-full h-[200px]"
          />
          <h1 className="text-4xl font-medium">{petData.NM_PET}</h1>
          <div className="grid grid-cols-2 gap-5 cursor-default">
            {petData.TIPO === "Gato" ? (
              <div className="flex items-center px-4 py-2 text-2xl border w-52 text-slate-500 border-slate-500">
                <FaCat size={25} />
                <span className="m-auto">{petData.TIPO}</span>
              </div>
            ) : (
              <div className="flex items-center px-4 py-2 text-2xl border w-52 text-slate-500 border-slate-500">
                <FaDog size={25} />
                <span className="m-auto">{petData.TIPO}</span>
              </div>
            )}
            {petData.SEXO === "Fêmea" ? (
              <div className="flex items-center px-4 py-2 text-2xl text-pink-600 border border-pink-600 w-52">
                <PiGenderFemaleBold size={25} />
                <span className="m-auto">{petData.SEXO}</span>
              </div>
            ) : (
              <div className="flex items-center px-4 py-2 text-2xl text-blue-600 border border-blue-600 w-52">
                <PiGenderMaleBold size={25} />
                <span className="m-auto">{petData.SEXO}</span>
              </div>
            )}
            <div className="flex items-center px-4 py-2 text-2xl text-orange-400 border border-orange-400 w-52">
              <FaPaw size={25} />
              <span className="m-auto">{petData.RACA}</span>
            </div>
            <div className="flex items-center px-4 py-2 text-2xl text-green-600 border border-green-600 w-52">
              <FaHandHoldingMedical size={25} />
              <span className="m-auto">
                {petData.CASTRADO === "Não" ? "Não castrado" : "Castrado"}
              </span>
            </div>
          </div>
          <div className="z-10 flex justify-between w-full px-2 my-4">
            <div className="relative flex items-center gap-1">
              <FaDog />
              <span className="absolute text-xs bottom-5 left-5">Porte:</span>
              <span>{petData.PORTE}</span>
            </div>
            <div className="relative flex items-center gap-1">
              <IoMdPerson />
              <span className="absolute text-xs bottom-5 left-5">Dono:</span>
              <span>{petData.NM_USER}</span>
            </div>
            <div className="relative flex items-center gap-1">
              <FaRegCalendarAlt />
              <span className="absolute text-xs bottom-5 left-5">
                Publicado em:
              </span>
              <span>{petData.DATE_PUB}</span>
            </div>
          </div>

          {idUser == petData.ID_USER ? (
            <div className="flex w-full gap-2">
              <button
                onClick={() => setEditPet(true)}
                className={`w-full py-3 text-2xl font-semibold text-white bg-slate-500 hover:bg-slate-600`}>
                Editar
              </button>
              <button
                onClick={() => setDeletePet(true)}
                className={`w-full py-3 text-2xl font-semibold text-white bg-red-600 hover:bg-red-700`}>
                Deletar pet
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                if (idUser) {
                  setSolicitado(true);
                } else {
                  navigate("/login");
                }
              }}
              className={`w-full py-4 text-2xl font-semibold text-white bg-green-600 hover:bg-green-700 ${
                solicitado && "!bg-green-700 cursor-not-allowed"
              }`}>
              {solicitado ? (
                <span>
                  Solicitado <FaCheck size={20} className="inline my-auto" />
                </span>
              ) : (
                "Solicitar adoção"
              )}
            </button>
          )}
          {solicitado && (
            <button
              onClick={() => setSolicitado(false)}
              className="text-red-600 hover:underline">
              Cancelar solicitação
            </button>
          )}
        </div>
      </main>
    </>
  );
}
