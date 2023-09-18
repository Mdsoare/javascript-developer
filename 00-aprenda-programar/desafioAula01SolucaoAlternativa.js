/*
AUTOR: Marcelo Soares
DATA: 17/09/2023

DESAFIO: FAÇA UMA PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM. DEVE TER 3 VARIÁVEIS:

1 - DISTÂNCIA EM KM;
2 - GASTO MÉDIO DE COMBUSTÍVEL DO CARRO EM KM/L;
3 - PREÇO DO COMBUSTÍVEL;

AO FINAL, IMPRIMA NA CONSOLE O VALOR QUE SERÁ GASTO DE COMBUSTÍVEL PARA ESTA VIAGEM.
*/

function calculoGastoCobustivel(){
    // Recebendo valores do usuários:
    const distanciaEmKm = parseFloat(prompt('Digite a distância em quilômetros: '));
    const kmPorLitros = parseFloat(prompt('Digite a média de quilômetros por litro: '));
    const precoCombustivel = parseFloat(prompt('Digite o preço do combustível por litro: '));

    // Validando valores recebidos:
    if (isNaN(distanciaEmKm) || isNaN(kmPorLitros) || isNaN(precoCombustivel)) {
        console.log('Por favor, insira valores numéricos válidos.');
        return;
    }

    // Cálculo:
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoCombustivel;

    // Resultado em 2 casas decimais:
    console.log('O custo total de combustível para esta viagem será de R$ ' + valorGasto.toFixed(2));
}

// Chamando a função
calculoGastoCobustivel();