import { useEffect, useState } from "react";
import Gato from "../assets/gato.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Pet1 from "../assets/pets/pet1.jpg";
import Pet2 from "../assets/pets/pet2.jpg";
import Pet3 from "../assets/pets/pet3.png";

export default function Home() {
  const [pets, setPets] = useState([
    {
      ID_PET: 1,
      NM_PET: "Luna",
      RACA: "Shorthair",
      SEXO: "Fêmea",
      PORTE: "Pequeno",
      CASTRADO: "Não",
      TIPO: "Gato",
      IMG_PET: Pet1,
      NM_USER: "John Doe",
      DATE_PUB: "10/12/2023",
    },
    {
      ID_PET: 2,
      NM_PET: "Rocky",
      RACA: "Collie",
      SEXO: "Macho",
      PORTE: "Grande",
      CASTRADO: "Não",
      TIPO: "Cachorro",
      IMG_PET: Pet2,
      NM_USER: "Janne Hawks",
      DATE_PUB: "01/09/2023",
    },
    {
      ID_PET: 3,
      NM_PET: "Cleo",
      RACA: "Ragdoll",
      SEXO: "Macho",
      PORTE: "Pequeno",
      CASTRADO: "Sim",
      TIPO: "Gato",
      IMG_PET: Pet3,
      NM_USER: "Janne Hawks",
      DATE_PUB: "01/09/2023",
    },
  ]);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-cover bg-neutral-100">
        <div className="flex flex-col items-center gap-4 mt-28 max-w-[90rem] mx-4">
          <h1 className="text-4xl font-bold text-center max-sm:text-3xl">
            Pets disponíveis para adoção
          </h1>
          <div className="flex flex-wrap justify-center gap-16 mt-5 mb-20">
            {pets.length < 1 && (
              <span className="text-xl">Nenhum pet disponível para adoção</span>
            )}
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
                  onClick={() =>
                    navigate("/pet", { state: { pets: pets, id: e.ID_PET } })
                  }
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
