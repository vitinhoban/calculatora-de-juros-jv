const desconto = 0.1;

let produto = {
    codigo: '37022712',
    nome: "Mouse Pad Marvel",
    valor: 100
};

let teclado = {
    codigo: '488284824',
    nome: 'Teclado Gamer',
    valor: 500
};

function calcularCompra(produto, numParcelas) {
    const juros = 0.02;

    if (numParcelas === 0) {
        let valorComDesconto = produto.valor * (1 - desconto);
        console.log(`Compra à vista de ${produto.nome} com desconto: R$ ${valorComDesconto.toFixed(2)}`);
    }
    else if (numParcelas >= 1 && numParcelas <= 10) {
        let valorParcela = produto.valor / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x sem juros: R$ ${valorParcela.toFixed(2)} por parcela`);
    }
    else if (numParcelas >= 11 && numParcelas <= 12) {
        let valorTotalComJuros = produto.valor * (1 + juros);
        let valorParcela = valorTotalComJuros / numParcelas;
        console.log(`Compra parcelada em ${numParcelas}x com juros: R$ ${valorParcela.toFixed(2)} por parcela`);
    }
    else {
        console.log("O número de parcelas não é permitido. Trabalhamos apenas com até 12x.");
    }
}

calcularCompra(produto, 0);
calcularCompra(produto, 5);
calcularCompra(teclado, 11);
calcularCompra(teclado, 13);
