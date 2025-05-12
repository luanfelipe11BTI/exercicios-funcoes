function calcularLitros(tempo, velocidade) {
    let distancia = tempo * velocidade;
    let litros = distancia / 12;
    return litros.toFixed(3);
  }
  
  let exemplo1 = calcularLitros(10, 85);
  let exemplo2 = calcularLitros(2, 92);
  let exemplo3 = calcularLitros(22, 67);
  
  console.log(exemplo1);
  console.log(exemplo2);
  console.log(exemplo3);