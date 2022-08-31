const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna undefined se o parametro passado for undefined', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });

  it('Retorna undefined se o parametro passado for vazio', () => {
    expect(handlerElephants()).toEqual();
  });

  it('Retorna Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants(0)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('Retorna 4 se parâmetro for "count"', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Retorna o valor do resultado do parametro', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Retorna o valor da popularidade', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('Retorna null', () => {
    expect(handlerElephants('aaaa')).toEqual(null);
  });
});
