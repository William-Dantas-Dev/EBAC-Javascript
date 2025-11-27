function somaMultiplos1(n = 999) {
  let soma = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }

  return soma;
}
 
// Resultado esperado: { 156361 }

function somaMultiplos2(n = 999) {
  if (n === 0) return 0;

  const ehMultiplo = (n % 5 === 0 || n % 7 === 0);
  const valor = ehMultiplo ? n : 0;

  return valor + somaMultiplos2(n - 1);
}

// Resultado esperado: { 156361 }

module.exports = {somaMultiplos1, somaMultiplos2};