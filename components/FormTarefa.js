"use client"

import { useState } from "react";

export default function FormTarefa({ aoAdicionar }) {
    const [texto, setTexto] = useState("");
    const [erro, setErro] = useState("");
    const [prioridade, setPrioridade]= useState("media");
    const enviar = (event) => {
    event.preventDefault();
    if (texto.trim() === "") { setErro("Digite uma Tarefa!")
     return;
    }
    aoAdicionar(texto.trim(),prioridade);
    setTexto("");
    setErro("");
    };
    
    return (
    <form className="formulario" onSubmit={enviar}>
    <input value={texto} onChange={(event) => setTexto(event.target.value)} />
    <select
     aria-label="Prioridade"
     value={prioridade}
     onChange={(e)=>setPrioridade(e.target.value)}>
    <option value="alta">Alta</option>
    <option value="media">Média</option>
    <option value="baixa">Baixa</option>
    </select>
    {erro !== "" && <p className="erro">{erro}</p>} 
    <button type="submit">Adicionar</button>
    </form>
    )
}