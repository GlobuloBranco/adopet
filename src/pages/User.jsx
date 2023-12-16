import { useState } from "react";
import Navbar from "../components/Navbar";
import NewPet from "../components/NewPet";
import Gato from "../assets/gato.png";
import UserPic from "../assets/user-pfp.jpg";
import { useNavigate } from "react-router-dom";

export default function User() {
  const [newPet, setNewPet] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {newPet && <NewPet setNewPet={setNewPet} />}
      <main className="flex items-start justify-center min-h-screen overflow-hidden bg-neutral-100">
        <div className="flex flex-col items-center">
          <div className="flex gap-24 p-12 text-xl border border-black border-dashed rounded-xl mt-44">
            <div className="flex flex-col items-center gap-4">
              <img src={UserPic} width={200} className="rounded-full" />
              <button
                onClick={() => {
                  setNewPet(true);
                  document.body.style.overflow = "hidden";
                }}
                className="px-6 py-2 bg-yellow-400">
                Cadastrar pet
              </button>
            </div>
            <div className="grid self-center grid-cols-3 gap-10">
              <div className="">
                <h1 className="font-semibold">Nome</h1>
                <p>Eduardo Pinheiro</p>
              </div>
              <div className="">
                <h1 className="font-semibold">CPF</h1>
                <p>024.144.140-49</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Email</h1>
                <p>dudupinheiro@gmail.com</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Telefone</h1>
                <p>(13) 98104-6971</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Cidade</h1>
                <p>Santos</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Estado</h1>
                <p>São Paulo</p>
              </div>
            </div>
          </div>
          <h1 className="mt-12 text-3xl font-semibold">Pets cadastrados</h1>
          <div className="flex gap-6 w-[50%] overflow-x-scroll bg-gray-200 p-10 rounded-xl mb-24 mt-4">
            {Array(8)
              .fill("")
              .map((e) => (
                <div className="flex flex-col items-center min-w-[14rem] gap-3 pb-6 bg-white rounded-lg shadow-xl">
                  <img
                    src={Gato}
                    alt=""
                    className="w-full h-[150px] rounded-t-lg"
                  />
                  <h1 className="text-xl font-bold">Maggie</h1>
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
