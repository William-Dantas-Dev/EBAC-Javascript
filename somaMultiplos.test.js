const {somaMultiplos1, somaMultiplos2} = require('./somaMultiplos');

describe("Testes da função somaMultiplos", () => {
  test("Retorna 156361 quando usa o valor padrão (999)", () => {
    expect(somaMultiplos1()).toBe(156361);
  });

  test("Retorna 0 quando n = 0", () => {
    expect(somaMultiplos1(0)).toBe(0);
  });

  test("Calcula corretamente um intervalo pequeno", () => {
    // múltiplos de 5 ou 7 entre 1 e 10: 5, 7, 10 -> soma = 22
    expect(somaMultiplos1(10)).toBe(22);
  });

  test("Retorna 156361 quando usa o valor padrão (999)", () => {
    expect(somaMultiplos2()).toBe(156361);
  });

  test("Retorna 0 quando n = 0", () => {
    expect(somaMultiplos2(0)).toBe(0);
  });

  test("Calcula corretamente um intervalo pequeno", () => {
    // múltiplos de 5 ou 7 entre 1 e 10: 5, 7, 10 -> soma = 22
    expect(somaMultiplos2(10)).toBe(22);
  });
});
