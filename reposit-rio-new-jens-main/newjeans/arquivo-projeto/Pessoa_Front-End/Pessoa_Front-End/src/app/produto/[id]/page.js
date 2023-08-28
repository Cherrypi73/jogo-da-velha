'use client'

import Header from "@/app/componentes/Header";
import { useRouter } from "next/navigation";

export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }
    
    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3003/produto", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();


    
    return (
        <div className="h-screen">
            <div className="">
      <Header/>
    
    </div>
        <div className="flex justify-center ml-6 mr-6 mt-10">
    <div className="flex justify-center w-full">
   

   <div className="grid grid-cols-2 bg-white border-2 ">
    <div className="mt-10 mb-10 ml-10">
    <img src={produto.imagem}
    className="h-auto max-w-full max-h-full"></img>
    
    </div>
    <div>
            <p className="font-serif font-bold text-4xl ml-3 mt-16 mr-3 mb-10">{produto.titulo}</p>
            <p className="font-semibold text-3xl ml-3 mt-12 mb-10">Valor: R${produto.preco}</p>
            <p className="font-semibold text-2xl ml-3 mt-16 mb-10 mr-6">{produto.descricao}</p>
            
            
            </div>

            </div>

            </div>
            </div>
        </div>

    )
}