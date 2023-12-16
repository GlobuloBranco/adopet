import Gato from "../assets/gato.png";
import { PiGenderFemaleBold } from "react-icons/pi";
import { FaPaw, FaCat, FaHandHoldingMedical } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Pet() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-[url('./assets/bg-pet.jpg')] bg-cover">
        <div className="flex flex-col items-center gap-6 px-20 py-10 bg-white rounded-lg">
          <img
            src={Gato}
            alt="Pet Image"
            width={250}
            className="rounded-full h-[250px]"
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
        </div>
      </main>
    </>
  );
}
