import { useState } from "react";
import Logo from "../assets/adopet-logo-site.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/cadastro/usuario", {
        nm_user: data.name,
        cpf_user: data.cpf,
        email_user: data.email,
        senha_user: data.password,
      })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();
  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-100 bg-[url('./assets/bg-login.jpg')] bg-cover">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col px-12 py-10 bg-white rounded-lg">
        <img src={Logo} alt="" width={200} className="m-auto" />
        <div className="grid grid-cols-2 gap-12 my-6">
          <div className="flex flex-col text-xl">
            <label htmlFor="name" className="font-semibold">
              Nome
            </label>
            <input
              type="text"
              {...register("name")}
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
              {...register("cpf")}
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
              {...register("data_nasc")}
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
              {...register("email")}
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
              {...register("password")}
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
              id="password_repeat"
              className="p-2 text-xl border border-neutral-300"
            />
          </div>
        </div>
        <button className="py-2 text-xl font-semibold bg-yellow-400 hover:bg-yellow-500">
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
            Possui uma ong?{" "}
            <button
              onClick={() => navigate("/signup/ong")}
              className="text-green-800 hover:underline">
              Cadastre aqui
            </button>
          </span>
        </div>
      </form>
    </main>
  );
}
