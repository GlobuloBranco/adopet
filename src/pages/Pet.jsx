import Gato from "../assets/gato.png";
import { PiGenderFemaleBold } from "react-icons/pi";
import {
  FaPaw,
  FaCat,
  FaHandHoldingMedical,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FaLocationDot, FaPerson } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Pet() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-[url('./assets/bg-pet.jpg')] bg-cover">
        <div className="flex flex-col items-center gap-6 px-16 py-10 bg-white rounded-lg shadow-2xl">
          <img
            src={Gato}
            alt="Pet Image"
            width={200}
            className="rounded-full h-[200px]"
          />
          <h1 className="text-4xl font-medium">Maggie</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex items-center px-4 py-2 text-2xl border w-52 text-slate-500 border-slate-500">
              <FaCat size={25} />
              <span className="m-auto">Gato</span>
            </div>
            <div className="flex items-center px-4 py-2 text-2xl text-pink-600 border border-pink-600 w-52">
              <PiGenderFemaleBold size={25} />
              <span className="m-auto">Fêmea</span>
            </div>
            <div className="flex items-center px-4 py-2 text-2xl text-orange-400 border border-orange-400 w-52">
              <FaPaw size={25} />
              <span className="m-auto">Persa</span>
            </div>
            <div className="flex items-center px-4 py-2 text-2xl text-green-600 border border-green-600 w-52">
              <FaHandHoldingMedical size={25} />
              <span className="m-auto">Castrado</span>
            </div>
          </div>
          <div className="flex justify-between w-full px-2 my-4">
            <div className="relative flex items-center gap-1">
              <FaLocationDot />
              <span className="absolute text-xs bottom-5 left-5">
                Localização:
              </span>
              <span>Santos - SP</span>
            </div>
            <div className="relative flex items-center gap-1">
              <IoMdPerson />
              <span className="absolute text-xs bottom-5 left-5">Dono:</span>
              <span>Eduardo Pinheiro</span>
            </div>
            <div className="relative flex items-center gap-1">
              <FaRegCalendarAlt />
              <span className="absolute text-xs bottom-5 left-5">
                Publicado em:
              </span>
              <span>16/12/2023</span>
            </div>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="w-full py-4 text-2xl font-semibold text-white bg-green-600 hover:bg-green-700">
            Solicitar adoção
          </button>
        </div>
      </main>
    </>
  );
}
