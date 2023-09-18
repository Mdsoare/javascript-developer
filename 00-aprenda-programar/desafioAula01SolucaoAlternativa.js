/*
AUTOR: Marcelo Soares
DATA: 17/09/2023

DESAFIO: FAÇA UMA PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM. DEVE TER 3 VARIÁVEIS:

1 - DISTÂNCIA EM KM;
2 - GASTO MÉDIO DE COMBUSTÍVEL DO CARRO EM KM/L;
3 - PREÇO DO COMBUSTÍVEL;

AO FINAL, IMPRIMA NA CONSOLE O VALOR QUE SERÁ GASTO DE COMBUSTÍVEL PARA ESTA VIAGEM.
*/

// Função que calcula os gastos de combustível em R$
function calculaGastoCombustivel(){
    // Recebendo valores do usuários:
    const distanciaEmKm = parseFloat(prompt('Digite a distância em quilômetros:\n'));
    const kmPorLitros = parseFloat(prompt('Digite a média de quilômetros por litro:\n'));
    const precoCombustivel = parseFloat(prompt('Digite o preço do combustível por litro:\n'));

    // Validando valores recebidos:
    if (isNaN(distanciaEmKm) || isNaN(kmPorLitros) || isNaN(precoCombustivel)) {
        console.log('Por favor, insira valores numéricos válidos.');
        return;
    }

    // Cálculo:
    const litrosConsumidos = distanciaEmKm / kmPorLitros;
    const valorGasto = litrosConsumidos * precoCombustivel;

    // Resultado em 2 casas decimais:
    console.log(`O custo total de combustível para esta viagem será de R$ ${valorGasto.toFixed(2)}`);
}

// Função menu de entrada:
function menu(){
    let continuar = true;
    do {
        const escolha = parseInt(prompt('Escolha uma opção:\n1 - Calcular\n2 - Sair'));
            switch (escolha){
                case 1:
                    calculaGastoCombustivel();
                    break;
                case 2:
                    continuar = false; // Finalizar o programa
                    break;
                default:
                    console.log('Erro - Opção inválida. Tente novamente!');
            }
    } while (continuar);
}

menu();