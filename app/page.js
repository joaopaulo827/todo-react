import Cabecalho from "@/components/Cabecalho";
import ListaDeTarefas from "@/components/ListaDeTarefas";

export default function Home() {
  const nome="João Paulo"
  return (
    <>
    <Cabecalho titulo="To Do List" subtitulo="Meu primeiro projeto em React" />
    <main className="conteudo">
      <ListaDeTarefas/>
    </main>
    
    </>  
  );
}
