/*
AUTOR: Marcelo Soares
DATA: 20/09/2023

DESAFIO: FAÇA UMA PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM. DEVE TER 3 VARIÁVEIS:

1 - PREÇO ATUAL DO ETANOL;
2 - PREÇO ATUAL DA GASOLINA;
3 - TIPO DE COMBUSTÍVEL EM USO NO CARRO;
4 - GASTO MÉDIO DE COMBUSTÍVEL DO CARRO EM KM/L;
5 - DISTANCIA EM KM;

AO FINAL, IMPRIMA NA CONSOLE O VALOR QUE SERÁ GASTO DE COMBUSTÍVEL PARA ESTA VIAGEM.
*/

// Função para seleção de combustível
function escolhaTipoDeCombustivel() {

    const precoEtanol = 5.79;
    const precoGasolina = 6.83;
    let escolha = true;

    do {
        const tipoCombustivelDoCarro = parseInt(prompt('Escolha o combustível usado no veículo:\n1-Etanol\n2-Gasolina'));
        switch (tipoCombustivelDoCarro) {
            case 1:
                calculaGastoCombustivel(precoEtanol);
                escolha = false;
                break;
            case 2:
                calculaGastoCombustivel(precoGasolina);
                escolha = false;
                break;
            default:
                console.log('Erro - Opção inválida. Tente novamente!');
        }
    } while (escolha);

}

// Função que calcula os gastos de combustível em R$
function calculaGastoCombustivel(precoCombustivel) {

    // Recebendo valores do usuários:
    const distanciaEmKm = parseFloat(prompt('Digite a distância em quilômetros:\n'));
    const kmPorLitros = parseFloat(prompt('Digite a média de quilômetros por litro:\n'));

    // Validando valores recebidos:
    if (isNaN(distanciaEmKm) || isNaN(kmPorLitros)) {
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
function menu() {
    let continuar = true;
    do {
        const escolha = parseInt(prompt('Escolha uma opção:\n1 - Calcular\n2 - Sair'));
        switch (escolha) {
            case 1:
                escolhaTipoDeCombustivel();
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