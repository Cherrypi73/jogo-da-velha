'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import {  ArrowLeft} from 'lucide-react';


export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3003/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className="h-screen flex flex-col">
            <header className="bg-zinc-50 border-b border-zinc-200 px-3 ml-6 mr-6 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
    
      <div className="flex flex-col gap-1">
        <a href="#" className="ml-10 font-normal text-2xl hover:text-amber-100">Brave</a>
        <a href="#" className="ml-10 text-1xl text-zinc-400 hover:text-amber-100">A moda que faz você ser corajosa!</a>
      </div>
    </div>

    <div className="flex items-center gap-2 mt-10">
    
    </div>

  <nav className="flex mt-5 mr-10 gap-4">
  
  <img src="/logo.png" className="w-60" alt="Capa do site"/>
 
</nav>
</header>

        <div className={styles.main}>
            <form className="mt-10" onSubmit={cadastrar}>
            <h1 className="font-semibold text-3xl mt-10 mb-5">Formulário para Cadastrar:</h1>
                <input
                className="text-xl mt-5 p-5 h-20 mb-10 w-96 border-dashed border-b border-zinc-500 bg-zinc-100"
                    type="text"
                    placeholder='Titulo:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    className="text-xl mt-5 p-5 h-20 mb-10 w-96 border-dashed border-b border-zinc-500 bg-zinc-100"
                    type="date"
                    placeholder='Data de cadastro:'
                    nome="data_cadastro"
                    onChange={e => setData_cadastro(e.target.value)}
                /><br/>
                <input
                    className="text-xl mt-5 p-5 h-20 mb-10 w-96 border-dashed border-b border-zinc-500 bg-zinc-100"
                    type="number"
                    placeholder='Preço:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input
                    className="text-xl mt-5 p-5 h-20 mb-10 w-96 border-dashed border-b border-zinc-500 bg-zinc-100"
                    type="text"
                    placeholder='Descrição:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input
                    className="text-xl mt-5 p-5 h-20 mb-10 w-96 border-dashed border-b border-zinc-500 bg-zinc-100 "
                    type="text"
                    placeholder='Imagem do Produto:'
                    nome="imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/>
                <button type='submit'
                 className="border-2 border-black w-96 h-20 mt-10 mb-10 hover:bg-zinc-200 text-xl">Cadastrar</button>
                <div className=" h-20">
                    <a className="" href='/'>
                    <ArrowLeft size={58} strokeWidth={3} absoluteStrokeWidth className="hover:bg-zinc-200 " /></a>
                </div>
            </form>
        </div>
        </div>
    );
}