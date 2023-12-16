import Dog from "../assets/dog.png";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";
import { FaDog } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

export default function NewPet({ setNewPet }) {
  const [gender, setGender] = useState("");
  return (
    <div className="fixed flex items-center justify-center w-full min-h-screen bg-[rgba(0,0,0,0.2)]">
      <div className="relative px-20 py-10 bg-white rounded-lg animate-zoomIn">
        <button
          onClick={() => {
            setNewPet(false);
            document.body.style.overflow = "visible";
          }}
          className="absolute right-2 top-2">
          <IoCloseOutline size={40} />
        </button>
        <form action="" className="flex flex-col gap-6 text-xl">
          <div className="flex items-center gap-2 text-3xl font-bold">
            <FaDog size={40} />
            <h1>Cadastre um pet</h1>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="">Nome do pet</label>
            <input
              type="text"
              placeholder=""
              className="p-2 border border-neutral-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold">Sexo do pet:</h1>
            <div className="flex gap-2">
              <button onClick={() => setGender("male")} type="button">
                <div
                  className={`flex items-center px-4 py-1 text-xl text-blue-600 border border-blue-600 ${
                    gender === "male" &&
                    "!text-white !bg-blue-600 !font-semibold"
                  } hover:bg-blue-50`}>
                  <PiGenderMaleBold size={20} />
                  <span className="m-auto">Macho</span>
                </div>
              </button>
              <button onClick={() => setGender("female")} type="button">
                <div
                  className={`flex items-center px-4 py-1 text-xl text-pink-600 border border-pink-600 ${
                    gender === "female" &&
                    "!text-white !bg-pink-500 !font-semibold"
                  } hover:bg-pink-50`}>
                  <PiGenderFemaleBold size={20} />
                  <span className="m-auto">Fêmea</span>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="">Raça</label>
            <input
              type="text"
              placeholder=""
              className="p-2 border border-neutral-300"
            />
          </div>
          <div className="flex flex-col gap-2 font-semibold">
            <label htmlFor="">Porte</label>
            <input
              type="text"
              placeholder=""
              className="p-2 border border-neutral-300"
            />
          </div>
          <div>
            <h1 className="font-semibold">O pet foi castrado?</h1>
            <label htmlFor="yes" className="mr-2">
              Sim
            </label>
            <input type="radio" name="castrated" id="yes" />
            <label htmlFor="no" className="mx-2">
              Não
            </label>
            <input type="radio" name="castrated" id="no" />
          </div>
          <button className="py-2 bg-yellow-400">Cadastrar pet</button>
        </form>
      </div>
    </div>
  );
}
