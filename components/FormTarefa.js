"use client"

import { useState } from "react";

export default function FormTarefa({ aoAdicionar }) {
    const [texto, setTexto] = useState("");
    const [erro, setErro] = useState("");
    const [prioridade, setPrioridade]= useState("");
    const enviar = (event) => {
    event.preventDefault();
    if (texto.trim() === "") { setErro("Digite uma Tarefa!")
     return;
    }
    if (prioridade.trim() === "") { setErro("Definar uma Prioridade!")
     return;
    }    
    aoAdicionar(texto.trim());
    setTexto("");
    setPrioridade(prioridade.trim());
    };
    
    return (
    <form className="formulario" onSubmit={enviar}>
    <input value={texto} onChange={(event) => setTexto(event.target.value)} />
    <select
    className="etiqueta"
    value={prioridade}
    onChange={(event) => setPrioridade(event.target.value)}>
    <option value="">Selecione a prioridade</option>
    <option value="Alta">Alta</option>
    <option value="Média">Média</option>
    <option value="Baixa">Baixa</option>
    </select>
    {erro !== "" && <p className="erro">{erro}</p>} 
    <button type="submit">Adicionar</button>
    </form>
    )
}