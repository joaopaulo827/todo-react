export default function TarefasItem({tarefa, aoConcluir, aoExcluir}){
    return(
        <li className={tarefa.concluida?"tarefa concluida": "tarefa"}>
        <label>
            <input type="checkbox" checked={tarefa.concluida}
            onChange={()=>aoConcluir(tarefa.id)}
            />
            <span>{tarefa.descricao}</span>
            <button type="button" className="botao-secundario" 
            onClick={()=> aoExcluir(tarefa.id)}>
             Excluir
            </button>
        </label>
        </li>        
    )
}