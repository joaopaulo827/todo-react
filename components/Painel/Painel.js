export default function Painel({ titulo, children }) {
    return (
      <div className={styles.painel}>
        <h2>{titulo}</h2>
        {children}
      </div>
    );
  }
  
  <Painel titulo="Avisos">
    <p>Prova na quinta.</p>
    <p>Trazer o notebook.</p>
  </Painel>