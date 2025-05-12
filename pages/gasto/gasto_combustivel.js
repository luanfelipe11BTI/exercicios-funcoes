let calcularLitros = (tempo, velocidade) => (tempo * velocidade) / 12;

let resultado1 = calcularLitros(10, 85);
let resultado2 = calcularLitros(2, 92);
let resultado3 = calcularLitros(22, 67);

console.log(resultado1.toFixed(3));
console.log(resultado2.toFixed(3));
console.log(resultado3.toFixed(3));
