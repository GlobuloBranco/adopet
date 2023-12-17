import { useState } from "react";
import Logo from "../assets/adopet-logo-site.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/login/user", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        localStorage.setItem("id_user", res.data.id_user);
        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-neutral-100 bg-[url('./assets/bg-login.jpg')] bg-cover">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 px-12 py-10 bg-white rounded-lg">
        <div className="flex flex-col text-xl">
          <img src={Logo} alt="" width={200} className="m-auto mb-4" />
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
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
            {...register("password")}
            id="password"
            className="p-2 text-xl border w-[20rem]"
          />
          {error && (
            <span className="mt-1 -mb-2 text-base text-red-600">
              Email ou senha inválidos
            </span>
          )}
        </div>
        <button className="py-2 text-xl font-semibold bg-yellow-400 hover:bg-yellow-500">
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
