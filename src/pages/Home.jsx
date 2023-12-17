import { useEffect, useState } from "react";
import Gato from "../assets/gato.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/encontrar/pets`)
      .then((res) => {
        console.log(res.data);
        setPets(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-cover bg-neutral-100">
        <div className="flex flex-col items-center gap-4 mt-28 max-w-[90rem]">
          <h1 className="text-4xl font-bold">Pets disponíveis para adoção</h1>
          <div className="flex flex-wrap justify-center gap-16 mt-5 mb-20">
            {pets.map((e, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 pb-6 text-xl bg-white rounded-lg shadow-xl w-72">
                <img
                  src={e.IMG_PET}
                  alt=""
                  className="w-full h-[250px] rounded-t-lg"
                />
                <h1 className="text-2xl font-bold">{e.NM_PET}</h1>
                <span>Raça: {e.RACA}</span>
                <span>Porte: {e.PORTE}</span>
                <button
                  onClick={() => navigate("/pet", { state: { id: e.CD_PET } })}
                  className="px-8 py-2 text-xl font-semibold bg-yellow-400 hover:bg-yellow-500">
                  Ver detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
