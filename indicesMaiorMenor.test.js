const { indicesMaiorMenor1, indicesMaiorMenor2 } = require('./indiceMaiorMenor');

describe("Testes da função indicesMaiorMenor", () => {

  // ------------------------
  // TESTES DA VERSÃO ITERATIVA
  // ------------------------
  test("indicesMaiorMenor1 encontra maior e menor corretamente", () => {
    expect(indicesMaiorMenor1([10, 3, 25, 7, 1, 20])).toEqual({
      indiceMaior: 2,
      indiceMenor: 4
    });
  });

  test("indicesMaiorMenor1 funciona com array ordenado", () => {
    expect(indicesMaiorMenor1([1, 2, 3, 4])).toEqual({
      indiceMaior: 3,
      indiceMenor: 0
    });
  });

  test("indicesMaiorMenor1 funciona com array de tamanho 1", () => {
    expect(indicesMaiorMenor1([42])).toEqual({
      indiceMaior: 0,
      indiceMenor: 0
    });
  });

  // ------------------------
  // TESTES DA VERSÃO RECURSIVA
  // ------------------------
  test("indicesMaiorMenor2 encontra maior e menor corretamente", () => {
    expect(indicesMaiorMenor2([10, 3, 25, 7, 1, 20])).toEqual({
      indiceMaior: 2,
      indiceMenor: 4
    });
  });

  test("indicesMaiorMenor2 funciona com array ordenado", () => {
    expect(indicesMaiorMenor2([1, 2, 3, 4])).toEqual({
      indiceMaior: 3,
      indiceMenor: 0
    });
  });

  test("indicesMaiorMenor2 funciona com array de tamanho 1", () => {
    expect(indicesMaiorMenor2([42])).toEqual({
      indiceMaior: 0,
      indiceMenor: 0
    });
  });

});
