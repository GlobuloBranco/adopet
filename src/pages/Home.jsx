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
                <div className="flex flex-col items-center gap-3 px-12 py-6 text-xl bg-white rounded-lg shadow-xl">
                  <img src={Gato} alt="" width={200} />
                  <h1 className="text-2xl font-bold">Maggie</h1>
                  <span>Raça: gato</span>
                  <span>Porte: Pequeno</span>
                  <button
                    onClick={() => navigate("/pet")}
                    className="w-full py-2 text-xl font-semibold bg-yellow-400">
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
