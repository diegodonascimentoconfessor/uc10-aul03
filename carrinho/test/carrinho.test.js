import Carrinho from "../carrinho";
import Item from "../item";

describe('Teste Carrinho', () => {
  it('deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull(); // Verifica se o subtotal inicial é nulo
  });

  it('deve ter itens', () => {
    const item1 = new Item('Caderno', 4, 5); // nome do item, preço, quantidade
    const item2 = new Item('Lápis', 2, 10);
    const carrinho = new Carrinho();

    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object'); // Verifica se o carrinho é um objeto
    expect(carrinho.itens[0]).toBe(item1); // Verifica se o primeiro item é o esperado
    expect(carrinho.itens[1]).toBe(item2); // Verifica se o segundo item é o esperado
    expect(carrinho.itens).toContain(item1); // Verifica se o item1 está na lista
    expect(carrinho.itens).toContain(item2); // Verifica se o item2 está na lista
  });

  it('deve ter a propriedade subtotal na inicialização', () => {
    const carrinho = new Carrinho();
    expect(carrinho).toHaveProperty('subtotal'); // Verifica se a propriedade 'subtotal' existe
  });

  it('deve verificar se o array contém um item com as mesmas propriedades', () => {
    const item1 = new Item('beterraba', 2.5, 10);
    const item2 = new Item('cenoura', 1.5, 20);
    const item3 = new Item('batata', 3.0, 15);

    const listaDeItens = [item1, item2, item3];

    // Verificar se o array contém um item equivalente a item2
    expect(listaDeItens).toContainEqual(item2);

    // Verificar um item novo com as mesmas propriedades de item1
    const itemIgual = new Item('beterraba', 2.5, 10);
    expect(listaDeItens).toContainEqual(itemIgual);
  });
});
