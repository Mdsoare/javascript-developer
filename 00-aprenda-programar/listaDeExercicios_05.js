/*
AUTHOR: Marcelo Soares
DATE: 23/10/2023
RESUME: Criar a classe pessoa com os atributos nome, peso e altura.
Crie o método IMC e instancie uma pessoa chamada José com 70Kg de peso e 1.75 de altura e retorne o IMC.
*/

//Criando a classe pessoa
class pessoa{
    //Criando construtor
	constructor(nome, peso, altura){
    	this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    };
    
    //Método que retorna o valor do IMC
    calculoImc(){    
       return this.peso / ( this.altura * this.altura );
    };
    
    //Método que retorna a tabela IMC
    tabelaImc(){
       	const imc = this.calculoImc();
        if (imc < 18.5) {
            return 'abaixo do peso!';
        } else if (imc >= 18.5 && imc < 25) {
       	    return 'peso normal';
        } else if (imc >= 25 && imc < 30){
       	    return 'acima do peso';
        } else if (imc >= 30 && imc < 40){
       	    return 'obeso';
        } else {
       	    return 'obesidade grave!';	       
        };
       
    };
};

// Instanciando objeto
const pessoa1 = new pessoa('José', 70, 1.75);
console.log(`${pessoa1.nome} seu IMC é ` 
			+ pessoa1.calculoImc().toFixed(2) + ` que é considerado ${pessoa1.tabelaImc()}`);