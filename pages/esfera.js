function calcularLitros(tempo, velocidade) {
    let distancia = tempo * velocidade;
    let litros = distancia / 12;
    return litros.toFixed(3);
function calcularVolume(raio) {
    return (4 / 3.0) * 3.14159 * (raio * raio * raio);
  }

  let exemplo1 = calcularLitros(10, 85);
  let exemplo2 = calcularLitros(2, 92);
  let exemplo3 = calcularLitros(22, 67);
  let raio1 = 3;
  let raio2 = 15;
  let raio3 = 1523;

  console.log(exemplo1);
  console.log(exemplo2);
  console.log(exemplo3);
  let volume1 = calcularVolume(raio1);
  let volume2 = calcularVolume(raio2);
  let volume3 = calcularVolume(raio3);
  
  console.log(`VOLUME = ${volume1.toFixed(3)}`);
  console.log(`VOLUME = ${volume2.toFixed(3)}`);
  console.log(`VOLUME = ${volume3.toFixed(3)}`);
}