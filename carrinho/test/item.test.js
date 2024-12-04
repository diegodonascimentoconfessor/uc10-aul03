import Item from "../item";

describe('Teste dos Itens', () => {
    it('deve ter 3 campos: nome, valor e quantidade', () => {
        const item = new Item('beterraba', 2.5, 10); // Instância do Item

        expect(item.nome).toBe('beterraba'); // Verifica o nome
        expect(item.valor).toBe(2.5);       // Verifica o valor
        expect(item.quantidade).toBe(10);  // Verifica a quantidade
    });
    it('deve ter o preço calculado de acordo com a quantidade', () => {
        const item = new Item('Arroz', 0.1, 3); // Instância do Item
        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3); // Valor esperado: 0.1 * 3 = 0.3
    });
    

     
});
