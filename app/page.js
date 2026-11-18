import Cabecalho from "@/components/Cabecalho/Cabecalho";
import ListaDeTarefas from "@/components/Quadro/Quadro";

export default function Home() {
  return (
    <>
    <Cabecalho titulo="To Do List" subtitulo="Meu primeiro projeto em React" />
    <main className="conteudo">
      <ListaDeTarefas/>
    </main>
    
    </>  
  );
}
