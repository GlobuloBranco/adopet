import { useState } from "react";
import Gato from "../assets/gato.png";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex items-center justify-center min-h-screen bg-cover bg-neutral-100">
      <div className="flex flex-col st gap-4 mt-20 max-w-[90rem]">
        <h1 className="text-4xl font-bold">Pets disponíveis para adoção</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-5 mb-20">
        {Array(15)
          .fill("")
          .map((e) => (
            <div className="flex flex-col items-center gap-4 px-12 py-6 bg-white rounded-lg shadow-xl">
              <img src={Gato} alt="" width={200} />
              <h1 className="text-2xl font-semibold">Maggie</h1>
              <span>Raça: gato</span>
              <span>Porte: Pequeno</span>
              <button className="w-full py-1 text-xl font-semibold bg-yellow-400">Ver detalhes</button>
            </div>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
