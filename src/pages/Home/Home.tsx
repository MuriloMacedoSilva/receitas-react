import { useEffect, useState } from "react";
import Header from "../../components/Header";
import type { ReceitasTipos } from "../../types/ReceitasTipos";
import { Link } from "react-router";
import Footer from "../../components/Footer";

export default function Home() {
  const [receitas, setReceitas] = useState<ReceitasTipos[]>([]);
  const [filtro, setFiltro] = useState("todos");

  useEffect(() => {
    const buscarReceitas = async () => {
      try {
        const response = await fetch("/data/receitas.json");
        const data = await response.json();
        setReceitas(data);
      } catch (error) {
        console.error("Erro ao buscar receita: ", error);
      }
    };
    buscarReceitas();
  }, []);

  // Aplica o filtro
  const receitasFiltradas =
    filtro === "todos"
      ? receitas
      : receitas.filter((receita) => receita.categoria === filtro);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-10 items-center flex px-5 gap-8">
        <button
          onClick={() => setFiltro("doces")}
          className="border cursor-pointer flex items-center justify-center rounded-4xl p-2"
        >
          Doces
        </button>
        <button
          onClick={() => setFiltro("salgados")}
          className="border cursor-pointer flex items-center justify-center rounded-4xl p-2"
        >
          Salgados
        </button>
        <button
          onClick={() => setFiltro("todos")}
          className="border cursor-pointer flex items-center justify-center rounded-4xl p-2"
        >
          Todos
        </button>
      </div>

      <div className="w-full px-[30px] h-full">
        <h1 className="text-amber-950 font-bold text-[40px] mb-[30px] w-full flex justify-center items-center">
          Receitas
        </h1>

        <div className="max-w-[750px] lg:max-w-[1000px] xl:max-w-[1600px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {receitasFiltradas.map((receita) => (
            <div
              key={receita.id}
              className="w-full rounded-3xl shadow-2xl shadow-black/20 border border-black/20 overflow-hidden pb-1.5 mb-10 max-w-[300px] min-w-[300px] hover:scale-105 transition duration-150"
            >
              <img
                src={receita.imagem}
                alt="imagem da receita"
                className="w-full mb-1.5 h-[150px]"
              />
              <div className="px-2 flex flex-col">
                <h2 className="text-amber-950 font-semibold text-[20px]">
                  {receita.nome}
                </h2>
                <h3>{receita.tempo}</h3>
                <Link
                  to={`/Receitas/${receita.nome}`}
                  className="flex items-center justify-center p-1 border rounded-full cursor-pointer bg-amber-300"
                >
                  Ver receita
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
