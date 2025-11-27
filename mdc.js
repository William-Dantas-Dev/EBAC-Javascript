function mdc1(a, b){
    while (b !== 0){
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}


function mdc2(a, b) {
  if (b === 0) return a;
  return mdc2(b, a % b);
}


module.exports = { mdc1, mdc2 };