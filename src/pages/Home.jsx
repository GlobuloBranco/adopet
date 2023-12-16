import { useState } from "react";
import Gato from "../assets/gato.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-cover bg-neutral-100">
        <div className="flex flex-col items-center gap-4 mt-28 max-w-[90rem]">
          <h1 className="text-4xl font-bold">Pets disponíveis para adoção</h1>
          <div className="flex flex-wrap justify-center gap-16 mt-5 mb-20">
            {Array(15)
              .fill("")
              .map((e) => (
                <div className="flex flex-col items-center gap-3 pb-6 text-xl bg-white rounded-lg shadow-xl w-72">
                  <img
                    src={Gato}
                    alt=""
                    className="w-full h-[200px] rounded-t-lg"
                  />
                  <h1 className="text-2xl font-bold">Maggie</h1>
                  <span>Raça: gato</span>
                  <span>Porte: Pequeno</span>
                  <button
                    onClick={() => navigate("/pet")}
                    className="px-8 py-2 text-xl font-semibold bg-yellow-400">
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
