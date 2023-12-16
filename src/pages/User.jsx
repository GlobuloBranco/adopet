import Navbar from "../components/Navbar";

export default function User() {
  return (
    <>
      <Navbar />
      <main className="flex items-start justify-center min-h-screen bg-neutral-100">
        <div className="flex gap-24 p-12 text-xl border border-black border-dashed rounded-xl mt-44">
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://thispersondoesnotexist.com"
              width={200}
              className="rounded-full"
            />
            <button className="px-6 py-2 bg-yellow-400">Cadastrar pet</button>
          </div>
          <div className="grid grid-cols-3">
            <div className="">
              <h1 className="font-semibold">Nome</h1>
              <p>Robert Laplace</p>
            </div>
            <div className="">
              <h1 className="font-semibold">CPF</h1>
              <p>523.752.318-80</p>
            </div>
            <div className="">
              <h1 className="font-semibold">Email</h1>
              <p>robertllp@gmail.com</p>
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
      </main>
    </>
  );
}
