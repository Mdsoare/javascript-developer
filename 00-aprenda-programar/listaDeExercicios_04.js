/*
AUTHOR: Marcelo Soares
DATE: 23/09/2023
RESUME: Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos 
retorne o valor gasto em reais para realizar o precurso.
*/

//Criando classe carro:
class carro{
	marca;
    cor;
    gastoMedioPorKm;
	distancia;
	precoCombustivel;

	constructor(marca, cor, gastoMedioPorKm){
    	this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;    
    };
    
    calculoConsumo(distanciaEmKm, precoCombustivel){
    	let resultado = distanciaEmKm * (precoCombustivel * this.gastoMedioPorKm);
        console.log(`O Valor gasto para o percurso é de R$ ` + resultado.toFixed(2));
    };
};


let carro1 = new carro("Toyota", "Vinho", 1/16.5);
carro1.calculoConsumo(180, 5.98);