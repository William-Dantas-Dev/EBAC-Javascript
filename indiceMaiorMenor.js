function indicesMaiorMenor1(array) {
  let indiceMaior = 0;
  let indiceMenor = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMaior]) {
      indiceMaior = i;
    }
    if (array[i] < array[indiceMenor]) {
      indiceMenor = i;
    }
  }

  return {
    indiceMaior,
    indiceMenor
  };
}

function indicesMaiorMenor2(array, index = 0, maior = 0, menor = 0) {
  if (index === array.length) {
    return { indiceMaior: maior, indiceMenor: menor };
  }

  if (array[index] > array[maior]) {
    maior = index;
  }

  if (array[index] < array[menor]) {
    menor = index;
  }

  return indicesMaiorMenor2(array, index + 1, maior, menor);
}

module.exports = { indicesMaiorMenor1, indicesMaiorMenor2 };