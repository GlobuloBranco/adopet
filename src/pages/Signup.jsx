import { useState } from "react";
import Logo from "../assets/adopet-logo-site.png";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-100 bg-[url('./assets/bg-login.jpg')] bg-cover">
      <form action="" className="flex flex-col px-12 py-10 bg-white rounded-lg">
        <img src={Logo} alt="" width={200} className="m-auto" />
        <div className="grid grid-cols-2 gap-12 my-6">
          <div className="flex flex-col text-xl">
            <label htmlFor="name" className="font-semibold">
              Nome
            </label>
            <input
              type="text"
              name=""
              id="name"
              className="p-2 text-xl border w-80 border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="cpf" className="font-semibold">
              CPF
            </label>
            <input
              type="text"
              name=""
              id="cpf"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="data" className="font-semibold">
              Data de nasc.
            </label>
            <input
              type="date"
              name=""
              id="data"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
          <div className="flex flex-col text-xl">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
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
          className="py-2 text-xl font-semibold bg-yellow-400">
          Cadastrar
        </button>
        <span className="mt-2 text-base">
          Já possui uma conta?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-orange-600 hover:underline">
            Entre aqui
          </button>
        </span>
      </form>
    </main>
  );
}
