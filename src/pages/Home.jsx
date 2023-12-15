import { useState } from "react";
import Gato from "../assets/gato.png";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-cover bg-neutral-100">
      <div className="flex flex-col max-w-6xl gap-4 mt-16">
        <h1 className="text-4xl font-bold">Pets disponíveis para adoção</h1>
        <div className="flex flex-wrap justify-center gap-8">
        {Array(15)
          .fill("")
          .map((e) => (
            <div className="flex flex-col items-center gap-4 px-8 py-4 bg-white">
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
  );
}
