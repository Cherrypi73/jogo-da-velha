import Link from "next/link";
import { Plus } from "lucide-react";

export default function Header(){
    return(
    <div>
    <header className="bg-zinc-50 border-b border-zinc-200 px-3 ml-6 mr-6 py-3 flex items-center justify-between">
    <div className="flex items-center gap-3">
    <img className="w-60" src="/logo.png" alt="Capa do site"/>
      <div className="flex flex-col gap-1">
        <a href="#" className="font-normal text-3xl hover:text-zinc-400">Brave</a>
        <a href="#" className="text-1xl text-zinc-800 hover:text-zinc-400">A moda que te faz corajosa!</a>
      </div>
    </div>

    

  <nav className="flex mt-5 mr-10 gap-4">
  
    <Link href="./cadastro" className=" h-20 text-xl flex justify-center hover:text-zinc-500">Cadastrar</Link>
 
  

</nav>
</header>
</div>
)
}