import Cabecalho from "@/components/Cabecalho";

export default function Home() {
  const nome="João Paulo"
  return (
    <>
    <h1 className="titulo">Olá, {nome}</h1>
    <main>Hello World!</main>
    <Cabecalho titulo="To Do List" subtitulo="aula 23" />
    <main className="conteudo"></main>
    <ul className="lista">
    {tarefasItem.map((tarefa)=>(
      <tarefasItem key={tarefa.id} tarefa={tarefa}/>
      ))}
    </ul>
    <li className={feita ? "tarefa concluida": tarefa}></li>
    </>  
  );
}
