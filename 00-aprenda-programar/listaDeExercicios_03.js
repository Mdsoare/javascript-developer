/*
Autor: Marcelo Soares
Data: 23/09/2023

1) Faça um programa que calcule o preço de um produto com base na forma de pagamento através de um código
- À vista Débito, 10% desconto;
- À vista Dinheiro ou PIX, 15 % desconto;
- Em duas vezes, preço normal sem juros;
- Acima de duas vezes, preço normal + 10% de juros; 
*/

function calculoPrecoProduto(codigo, preco){
    
    switch (codigo){
        case 001:
            console.log(`O valor a ser pago é de R$ ${(preco*0.9).toFixed(2)}`);
            break;
        case 002:
            console.log(`O valor a ser pago é de R$ ${(preco*0.85).toFixed(2)}`);
            break;
        case 003:
            console.log(`O valor a ser pago é de R$ ${(preco).toFixed(2)}, divididos em duas parcelas`);
            break;
        case 004:
            console.log(`O valor a ser pago é de R$ ${(preco*1.1).toFixed(2)}, divididos em três ou mais parcelas`);
            break;
        default:
            console.log(`Erro! Código inválido!`);
    }
}

calculoPrecoProduto(001,100);
calculoPrecoProduto(002,100);
calculoPrecoProduto(003,100);
calculoPrecoProduto(004,100);
calculoPrecoProduto(005,100);