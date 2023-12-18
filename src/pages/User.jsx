import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NewPet from "../components/NewPet";
import Gato from "../assets/gato.png";
import UserPic from "../assets/blank-pfp.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [newPet, setNewPet] = useState(false);
  const [pets, setPets] = useState([]);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const idUser = localStorage.getItem("id_user");

  useEffect(() => {
    if (!idUser) {
      navigate("/login");
    }
    axios
      .post("http://localhost:3000/encontrar/usuario", {
        cd_user: idUser,
      })
      .then((res) => {
        console.log(res);
        setUserData(res.data);
        axios
          .get(`http://localhost:3000/pet/petsUsuario/${idUser}`)
          .then((res) => {
            console.log(res.data);
            setPets(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newPet]);

  return (
    <>
      <Navbar />
      {newPet && <NewPet setNewPet={setNewPet} />}
      <main className="flex items-start justify-center min-h-screen overflow-hidden bg-neutral-100">
        <div className="flex flex-col items-center">
          <div className="flex gap-24 p-12 text-xl border border-black border-dashed rounded-xl mt-44">
            <div className="flex flex-col items-center gap-4">
              <img
                src={UserPic}
                width={180}
                className="border border-black rounded-full"
              />
              <button
                onClick={() => {
                  setNewPet(true);
                  document.body.style.overflow = "hidden";
                }}
                className="w-full py-2 font-semibold bg-yellow-400 rounded-2xl">
                Cadastrar pet
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate("/login");
                }}
                className="w-full py-2 font-semibold text-white bg-red-700 rounded-2xl">
                Deslogar
              </button>
            </div>
            <div className="grid self-center grid-cols-3 gap-10">
              <div className="">
                <h1 className="font-semibold">Nome</h1>
                <p>{userData.NM_USER}</p>
              </div>
              <div className="">
                <h1 className="font-semibold">CPF</h1>
                <p>{userData.CPF_USER}</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Email</h1>
                <p>{userData.EMAIL_USER}</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Telefone</h1>
                <p>(13) 98104-6971</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Cidade</h1>
                <p>{userData.CIDADE_USER}</p>
              </div>
              <div className="">
                <h1 className="font-semibold">Estado</h1>
                <p>São Paulo</p>
              </div>
            </div>
          </div>
          <h1 className="mt-12 text-3xl font-semibold">Pets cadastrados</h1>
          <div className="flex gap-6 w-[80rem] overflow-x-scroll bg-gray-200 p-10 rounded-xl mb-24 mt-4">
            {pets.length < 1 && (
              <span className="text-xl">Nenhum pet cadastrado</span>
            )}
            {pets.map((e, i) => (
              <div
                key={i}
                className="flex flex-col items-center min-w-[14rem] gap-3 pb-6 bg-white rounded-lg shadow-xl">
                <img
                  src={e.IMG_PET}
                  alt=""
                  className="w-full h-[150px] rounded-t-lg"
                />
                <h1 className="text-xl font-bold">{e.NM_PET}</h1>
                <span>Raça: {e.RACA}</span>
                <span>Porte: {e.PORTE}</span>
                <button
                  onClick={() => navigate("/pet", { state: { id: e.CD_PET } })}
                  className="px-8 py-2 text-xl font-semibold bg-yellow-400 hover:bg-yellow-500">
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
