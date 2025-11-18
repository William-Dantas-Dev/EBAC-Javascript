function somaMultiplos() {
  let soma = 0;

  for (let i = 1; i < 1000; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }

  return soma;
}

console.log(somaMultiplos()); 
// Resultado esperado: { 156361 }

function somaMultiplos(n = 999) {
  if (n === 0) return 0;

  const ehMultiplo = (n % 5 === 0 || n % 7 === 0);
  const valor = ehMultiplo ? n : 0;

  return valor + somaMultiplos(n - 1);
}

console.log(somaMultiplos()); 
// Resultado esperado: { 156361 }