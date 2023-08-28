"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from './componentes/Header';
import { Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import CarouselComponent from './componentes/Carrocel';
import { Footer } from './componentes/Footer';



export default async function Home() {
 const router = useRouter();
  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });

  

  const produtos = await req.json(); 
  
  const remover = async(id) => {
    const codigo = {id:parseInt(id)}
    
    const idJson = JSON.stringify(codigo);
    try {
        fetch("http://localhost:3003/produto", {
            method: "DELETE",
            headers: { 'content-type': 'application/json' },
            body: idJson
        })
        router.refresh();
    } catch (error) {
        alert("Ocorreu um erro" + error)
    }
}


  return (
    <div className="bg-zinc-100 h-screen flex flex-col"> 
    <div className="">
      <Header/>
    
    </div>

    <div className="flex justify-center mt-10">
      <CarouselComponent/>
      </div>
    <div className="grid grid-cols-5 gap-5 mt-6 ml-6 mr-6 ">
      {produtos.map(produtos => {
        let date = new Date(produtos.data_cadastro);
        let datinha = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
        return (<div className="border bg-white" key={produtos.codigo}>
          <img className="mt-6"
          src={produtos.imagem}></img>
          <p className="font-bold text-xl ml-3 mt-6 mr-3">{produtos.titulo}</p>
          
          <p className="font-semibold ml-3 mt-5">Valor: R${produtos.preco}</p>
          <p className="ml-3 mt-3">{produtos.descricao}</p>

          <p className="ml-3 mt-3 mb-6">Data de Cadastro: {datinha}</p>

          <Link className="ml-3 hover:bg-zinc-300"
           href={`/produto/${produtos.codigo}`}>Ver mais</Link>

          <div className="flex flex-row-reverse">
            <button className="mt-6 mr-6 mb-3" 
          onClick={e => e.preventDefault(remover(produtos.codigo))}>
            <Trash2/></button><br/>
            </div>
          
          
        </div>)
      })}
      </div>
      <Footer/>
    </div>
  )
}