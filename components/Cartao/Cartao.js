import Etiqueta from "@/components/Etiqueta/Etiqueta";

import styles from "./Cartao.module.css";

export default function Cartao({ tarefa }) {

return (

<li className={

`${styles.cartao} ${styles[tarefa.prioridade]}`

}>

<p>{tarefa.descricao}</p>

<Etiqueta prioridade={tarefa.prioridade} />

</li>

);

}