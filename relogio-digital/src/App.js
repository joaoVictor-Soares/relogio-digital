import React, {useState, useEffect} from "react";

function Relogio(){
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    // inicia um intervalo que atualiza a hora a cada segundo
    const idIntervalo = setInterval(() => {
      console.log("Atualizando o relógio...")
      setHora(new Date())
    }, 1000);

    // retorna uma função de limpeza
    return() => {
      // limpa o intervalo para evitar vazamento de memória
      clearInterval(idIntervalo);
      console.log('Relógio parado. Intervalo limpo')
    };
  }, []);

  return(
    <div>
      <h2>Relógio Digital</h2>
      <p>A hora atual é: {hora.toLocaleTimeString()}</p>
    </div>
  )
}

export default Relogio