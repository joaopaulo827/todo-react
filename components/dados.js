let tarefasIniciais={id:1, descricao:Pagina1 ,concluida:false}
export default function tarefasItem({tarefa}){
    return(
        <li className={tarefa.concluida?"tarefa concluida": "tarefa"}>
            <label>
                <input type="checkbox" checked={tarefa.concluida}/>
                <span>{tarefa.descricao}</span>
            </label>
        </li>
        
    )
}