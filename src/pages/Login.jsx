import { useState } from "react";
import Logo from "../assets/adopet-logo-site.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-100 bg-[url('./assets/bg-login.jpg')] bg-cover">
      <form
        action=""
        className="flex flex-col gap-6 px-12 py-10 bg-white rounded-lg">
        <div className="flex flex-col text-xl">
          <img src={Logo} alt="" width={200} className="m-auto mb-4" />
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name=""
            id="email"
            className="p-2 text-xl border w-[20rem]"
          />
        </div>
        <div className="flex flex-col text-xl">
          <label htmlFor="email" className="font-semibold">
            Senha
          </label>
          <input
            type="password"
            name=""
            id="password"
            className="p-2 text-xl border w-[20rem]"
          />
        </div>
        <button
          onClick={() => navigate("/")}
          className="py-2 text-xl font-semibold bg-yellow-400 hover:bg-yellow-500">
          Entrar
        </button>
        <span className="-mt-4 text-base">
          Não tem conta?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-orange-600 hover:underline">
            Cadastre-se aqui
          </button>
        </span>
      </form>
    </main>
  );
}
