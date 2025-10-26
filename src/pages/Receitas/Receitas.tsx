import { useParams } from "react-router"
import { useEffect, useState } from "react";
import type { ReceitasTipos } from "../../types/ReceitasTipos";
import Header from "../../components/Header"
import Footer from "../../components/Footer";

export default function Receitas() {

    const { nome }  = useParams();

    const [receitas,setReceitas] = useState<ReceitasTipos | null>(null);

    useEffect(() => {
        fetch("/data/receitas.json")
        .then((res) => res.json())
        .then((data : ReceitasTipos[]) =>{
            const encontrada = data.find((p) => p.nome === nome);
            setReceitas(encontrada || null)
        })
        .catch(() => setReceitas(null))
    },[nome])

    if(!receitas){
        return(
            <>
            <Header/>
            <h1>Receita não encontrada</h1>
            </>
        )
    }
    return (
        <div>
            <Header/>
            <div className="w-full flex flex-col px-9">
                <h1 className="mt-[100px] text-amber-950 font-bold text-[50px]">{receitas.nome}</h1>
                <img src={receitas.imagem} alt="imagem da receita" className="max-w-[300px] rounded-2xl" />
                <h3>{receitas.tempo}</h3>
                <h3 className=" text-amber-950 font-bold text-[50px]">Ingredientes</h3>
                <p>{receitas.ingredientes}</p>
                <h3 className=" text-amber-950 font-bold text-[50px]">Modo de preparo</h3>
                <p className="mb-[100px]">{receitas.modo_de_preparo}</p>
            </div>
            <Footer/>
        </div>
    )
}