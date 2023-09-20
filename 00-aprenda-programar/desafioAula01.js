/*
AUTOR: Marcelo Soares
DATA: 17/09/2023

DESAFIO: FAÇA UMA PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM. DEVE TER 3 VARIÁVEIS:

1 - DISTÂNCIA EM KM;
2 - GASTO MÉDIO DE COMBUSTÍVEL DO CARRO EM KM/L;
3 - PREÇO DO COMBUSTÍVEL;

AO FINAL, IMPRIMA NA CONSOLE O VALOR QUE SERÁ GASTO DE COMBUSTÍVEL PARA ESTA VIAGEM.
*/

function calculoGastoCombustivel(distanciaEmKm, kmPorLitros, precoCombustivel){
    // Cálculo:
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoCombustivel;

    // Resultado em 2 casas decimais:
    console.log('O custo total de combustível para esta viagem será de R$ ' + valorGasto.toFixed(2));
}

// Chamando a função com valores aleatórios
calculoGastoCombustivel(97.6, 10, 5.79);