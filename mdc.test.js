const { mdc1, mdc2 } = require('./mdc');

describe("Testes da função MDC", () => {

  // ------------------------------
  // Testes da versão ITERATIVA
  // ------------------------------
  test("mdc1 calcula corretamente o MDC de 48 e 18", () => {
    expect(mdc1(48, 18)).toBe(6);
  });

  test("mdc1 retorna o próprio número quando o outro é 0", () => {
    expect(mdc1(10, 0)).toBe(10);
  });

  test("mdc1 funciona com números iguais", () => {
    expect(mdc1(7, 7)).toBe(7);
  });

  // ------------------------------
  // Testes da versão RECURSIVA
  // ------------------------------
  test("mdc2 calcula corretamente o MDC de 48 e 18", () => {
    expect(mdc2(48, 18)).toBe(6);
  });

  test("mdc2 retorna o próprio número quando o outro é 0", () => {
    expect(mdc2(10, 0)).toBe(10);
  });

  test("mdc2 funciona com números iguais", () => {
    expect(mdc2(7, 7)).toBe(7);
  });

});
