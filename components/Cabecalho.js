export default function Cabecalho({titulo, subtitulo}){
    return(
        <header className="Cabecalho" style={{textAlign: "center"}}>
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>    
        </header>
    )
}