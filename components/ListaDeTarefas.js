"use client"

import { useState } from "react";
import { tarefasIniciais } from "./dados";
import TarefasItem from "./tarefasItem";
import FormTarefa from "./FormTarefa";

export default function ListaDeTarefas(){
    const[tarefas, setTarefas]=useState(tarefasIniciais)

    const concluir= (id)=>{
        setTarefas(
            tarefas.map((tarefa)=> tarefa.id === id ? 
            {...tarefa, concluida: !tarefa.concluida}
            :
            tarefa
            )
        )
    }

    const adicionar= (descricao)=>{
        const nova = {id: Date.now(), descricao: descricao, concluida: false}
        setTarefas([...tarefas,nova])
    }

    return(
        <section>
            <FormTarefa aoAdicionar={adicionar}/>
        <ul>
        {tarefas.map((tarefa)=>(
            <TarefasItem key={tarefa.id} tarefa={tarefa} aoConcluir={concluir}/>
        ))}
        </ul>
        </section>
    )
}