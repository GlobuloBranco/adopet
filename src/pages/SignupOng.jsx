import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function SignupOng() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-100 bg-[url('./assets/bg-login.jpg')] bg-cover">
      <form className="relative flex flex-col px-12 py-10 bg-white rounded-lg">
        <BackButton />
        <img src={null} alt="" width={200} className="m-auto" />
        <div className="grid grid-cols-2 gap-12 my-6">
          <div className="flex flex-col text-xl">
            <label htmlFor="name" className="font-semibold">
              Nome da instituição
            </label>
            <input
              type="text"
              name=""
              id="name"
              className="p-2 text-xl border w-80 border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="name" className="font-semibold">
              Nome do diretor
            </label>
            <input
              type="text"
              name=""
              id="name"
              className="p-2 text-xl border w-80 border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="cnpj" className="font-semibold">
              CNPJ
            </label>
            <input
              type="text"
              name=""
              id="cnpj"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="cpf" className="font-semibold">
              CPF do diretor
            </label>
            <input
              type="text"
              name=""
              id="cpf"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="email" className="font-semibold">
              Email da instituição
            </label>
            <input
              type="email"
              name=""
              id="email"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="tel" className="font-semibold">
              Telefone
            </label>
            <input
              type="text"
              name=""
              id="tel"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="password" className="font-semibold">
              Senha
            </label>
            <input
              type="password"
              name=""
              id="password"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="password_repeat" className="font-semibold">
              Repetir senha
            </label>
            <input
              type="password"
              name=""
              id="password_repeat"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="py-2 text-xl font-semibold bg-yellow-400 hover:bg-yellow-500">
          Cadastrar
        </button>
        <div className="flex justify-between w-full">
          <span className="mt-2 text-base">
            Já possui uma conta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-orange-600 hover:underline">
              Entre aqui
            </button>
          </span>
          <span className="mt-2 text-base">
            Deseja cadastrar como tutor?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-green-800 hover:underline">
              Cadastre aqui
            </button>
          </span>
        </div>
      </form>
    </main>
  );
}
