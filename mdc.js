function mdc(a, b){
    while (b !== 0){
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

console.log(mdc(48, 18));
// Resultado esperado: { 6 }

function mdc(a, b) {
  if (b === 0) return a;
  return mdc(b, a % b);
}

console.log(mdc(48, 18));
// Resultado esperado: { 6 }