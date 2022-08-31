const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Retornar o objeto caso não receba nenhum argumento', () => {
    expect(getOpeningHours('', '')).toEqual(
      {
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      },
    );
  });

  it('Teste informar estado do Zoologico!', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
    expect(getOpeningHours('friday', '09:00-PM')).toEqual('The zoo is closed');
  });

  it('Retorno mensagem de exceção', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(Error);
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(Error);
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(Error);
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(Error);
  });

  it('Teste retornar Erro quando hora for maior que 12 e  minuto for maior  59.', () => {
    expect(() => getOpeningHours('Sunday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Sunday', '12:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
