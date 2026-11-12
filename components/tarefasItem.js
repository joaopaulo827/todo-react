export default function TarefasItem({tarefa, aoConcluir}){
    return(
        <li className={tarefa.concluida?"tarefa concluida": "tarefa"}>
        <label>
            <input type="checkbox" checked={tarefa.concluida}
            onChange={()=>aoConcluir(tarefa.id)}
            />
            <span>{tarefa.descricao}</span>
        </label>
        </li>        
    )
}