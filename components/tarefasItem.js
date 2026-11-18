"use client"

import { useState } from "react"

    const PRIORIDADES={
        alta: "Alta",
        media: "Média",
        baixa: "Baixa"
    }

export default function TarefasItem({tarefa, aoConcluir, aoExcluir, aoEditar}){
    const [editando, setEditando]= useState(false);
    const [texto,setTexto]= useState(tarefa.descricao);

    const salvarEdicao=()=>{
        const limpo= texto.trim()
        if(limpo !==""){
            aoEditar(tarefa.id,limpo);
        }else{
            setTexto(tarefa.descricao)
        }
        setEditando(false);
    }

    const teclaNaEdicao=(event)=>{
        if(event.key === "Enter") salvarEdicao();
        if(event.key === "Escape"){
            setTexto(tarefa.descricao);
            setEditando(false);
        }
    }

    return(
        <li className={tarefa.concluida?"tarefa concluida": "tarefa"}>
        <label>
            {editando ?(
             <input 
             className="editar"
             value={texto}
             onChange={(e)=> setTexto(e.target.value)}
             onBlur={salvarEdicao}
             onKeyDown={teclaNaEdicao}
             autoFocus
             aria-label="Editar Tarefa"
             />   
            ):(
            <label onDoubleClick={()=> setEditando(true)}>
            <input type="checkbox" checked={tarefa.concluida}
            onChange={()=>aoConcluir(tarefa.id)}
            />
            <span>{tarefa.descricao}</span>
            </label>    
            )}
            {tarefa.prioridade &&(
                <span className={"etiqueta "+tarefa.prioridade}>
                {PRIORIDADES[tarefa.prioridade]}
                </span>
            )}
            <button type="button" className="botao-secundario" 
            onClick={()=>aoExcluir(tarefa.id)}>
             Excluir
            </button>
        </label>
        </li>        
    )
}