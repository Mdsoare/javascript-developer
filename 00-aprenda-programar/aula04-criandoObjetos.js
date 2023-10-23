/*
AUTHOR: Marcelo Soares
DATE: 23/10/2023
RESUME: Código em JavaScript contendo o que foi aprendido sobre Objetos.
*/

//Definindo variável que recebe o JSON
let cadastro = {
	nome: "felipe",
    idade: 28,
    taxas: 98.90,
    //criando métoddo no objeto
    compra: function(){
    	console.log(`Dados cadastrados:\nCliente: ${this.nome}\nIdade: ${this.idade}\n`);
    },
    produtos: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.99]        
     }    
}

// função para percorrer um JSON
function geraDados(cadastro) {
	for(let index in cadastro){
       	console.log(`* ${index}: ${cadastro[index]}`);        
    }
}

// Como cadstro possui um lista em um dos objetos [object Object]
// Vamos criar uma função para percorrer a lista
function gerarLista(cadastro) {
   	for(let index in cadastro.produtos){
       	let [nomeProduto, precoProduto] = cadastro.produtos[index];
           console.log(`* ${nomeProduto}: R$ ${precoProduto}`);        
    }
}

// Extraindo um valor
console.log(`A taxa dos produtos é de R$ ${cadastro.taxas}`);
console.log('<----------------------------------------------->\n');

// Inserindo valores:
cadastro.altura = 1.85
geraDados(cadastro);
console.log('<----------------------------------------------->\n');

// deletando valor:
delete cadastro.altura;
geraDados(cadastro);
console.log('<----------------------------------------------->\n');

// Alterando valores
cadastro.nome = "Juan de Oliveira";
cadastro.idade = 32;
geraDados(cadastro);
console.log('<----------------------------------------------->\n');

//Percorrendo a lista
gerarLista(cadastro);
console.log('<----------------------------------------------->\n');

// Invocando método
cadastro.compra();
console.log('<----------------------------------------------->\n');
// Sobrescrevendo o método

cadastro.compra = function () {
	console.log(`O usuário cadastrado para esta compra é: ${this.nome}`);
}

cadastro.compra();
console.log('<----------------------------------------------->\n');

//Inserindo outro método:
cadastro.cancela = function (){
	console.log(`O cliente ${this.nome} deseja cancelar a compra`);
}

cadastro.cancela();
console.log('<----------------------------------------------->\n');