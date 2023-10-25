# Importações e Exportações no JavaScript

## Usando module.exports e require() para Node.Js Com JavaScript

Podemos desmembrar nosso código em funções auxiliares. As funções auxiliares são funções que podem ser usadas por outros módulos ou arquivos em um projeto JavaScript. Elas podem ser exportadas com o uso de `module.exports` e `require()` para facilitar a **reutilização** e a **organização** do código.

O `module.exports` é um objeto que contém as propriedades e métodos que serão exportados pelo módulo atual. Por exemplo:

```
// helper.js
function soma(a, b) {
  return a + b;
}

function subtrai(a, b) {
  return a - b;
}

module.exports = { soma, subtrai };
```

Nesse caso, o módulo `helper.js` está exportando duas **funções auxiliares: soma e subtrai**. O `require()` é uma função que permite **importar** um módulo em outro arquivo. Por exemplo:

```
// main.js
const helper = require('./helper.js');

console.log(helper.soma(2, 3)); // 5
console.log(helper.subtrai(5, 2)); // 3
```

Nesse caso, o arquivo `main.js` está importando o módulo `helper.js` e usando as funções auxiliares que ele exportou.



A atribuição via desestruturação (destructuring assignment) é uma sintaxe que permite extrair dados de arrays ou objetos em variáveis distintas1. Por exemplo:

## Object Destructuring

A atribuição via desestruturação (**destructuring assignment**) é uma sintaxe que permite extrair dados de arrays ou objetos em variáveis distintas[*](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). Por exemplo:

```
// sem desestruturação
const array = [1, 2, 3];
const primeiro = array[0];
const segundo = array[1];
const terceiro = array[2];

// com desestruturação
const [primeiro, segundo, terceiro] = array;
```

A desestruturação pode ser usada para simplificar a importação de módulos que exportam várias propriedades ou métodos. Por exemplo:

```
// sem desestruturação
const helper = require('./helper.js');
const soma = helper.soma;
const subtrai = helper.subtrai;

// com desestruturação
const {soma, subtrai} = require('./helper.js');
```

## Exercício de fixação

1. Crie um arquivo contendo as funções `gets` e `print` e importe-as no arquivo principal. Nomes dos arquivos: `funcoesAuxiliares.js` e `main.js`

```
/*File: funcoesAuxiliares.js*/ 

// Definindo funções `gets` e `print`:

function gets() {
	return 10; // Retorna o valor 10.
};

function print(texto){
	console.log(texto);
};

//Exportando as funções
module.exports = { gets, print };

/*
Poderíamos usar as formas abaixo:

module.exports.gets = gets;

ou 
module.exports = { 
		gets: gets, 
        print: print
        };
*/

```

```
/*File: main.js*/ 

// Importando funções para a const funcoes
const funcoes = require('./funcoesAuxiliares.js');

// Imprimindo o conteúdo de funcoes
console.log(funcoes); 
// { gets: [Function: gets], print: [Function: print] }

// Usando so métodos importados
funcoes.print(funcoes.gets()); 
// 10

```

2. Utilize no código acima o `Object Destructuring`

```
/*File: main.js*/

const { gets, print } = require('./funcoesAuxiliares.js');

print(gets());
// 10
```
3. Uma sala contém 5 alunos e para cada aluno foi sorteado com um número de 1 - 100. Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado conforme a tabela abaixo:


| Entrada de dados | Saída de dados |
| ---------------- | -------------- |
| 5                | 98             |
| 50               |                |
| 10               |                |
| 98               |                |
| 23               |                |


**Solução**

- Arquivo auxiliar:  **funcoesAuxiliares.js**

```
/*File: funcoesAuxiliares.js*/ 

// Definindo funções `gets` e `print`:
const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
	let valor = entradas[i];
    i += 1; 
	return valor;
};

function print(texto){
	console.log(texto);
};

//Exportando as funções
module.exports = { gets, print };
```

- Arquivo principal: **main.js**

```
/*File: main.js*/
// Importando métodos
const { gets, print } = require('./funcoesAuxiliares.js');

// Criando um array
let array = [];
for (let valor = gets(); valor !== undefined; valor = gets()) {
  array.push(valor);
}

// Usando método Math para extração do maior valor
const maiorNumero = Math.max.apply(null, array);

// Imprimindo entrada de dados e maior número:
print(`* Os números sorteados foram: ${array}`);
print(`* O maior número foi: ${maiorNumero}`);
```
Saída:
> * Os números sorteados foram: 5,50,10,98,23
> * O maior número foi: 98

* Podemos usar ainda outra forma de validar o maior valor:

```
/*File: main.js*/

// Importando métodos
const { gets, print } = require('./funcoesAuxiliares.js');


let maiorValorEncontrado = 0;
// Recebendo array e testando o maior valor
for (let i = 0; i < 5; i++){
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);
```
Saída:
> 98

3. Faça um programa que receba a média do aluno e retorne "Reprovado" se a média foi menor que 5, "Recuperação" se a média foi acima de 5 e menor do que 7 e "Aprovado" se a média for maior do que 7

* Código auxiliar:
```
/*File: funcoesAuxiliares.js*/ 

let array = [8.7, 4.9, 9.0, 5.5, 3.4, 7.7, 10.0];
let i = 0;

function gets() {
	let valor = array[i];
    i += 1;
    return valor;

};

function print(texto){
	console.log(texto);
};

function validaNota(nota) {
	if ( nota >= 0 && nota < 5 ){
    	return 'Reprovado';
    } else if ( nota >= 5 && nota < 7 ){
    	return 'Recuperação';
    } else if ( nota >= 7 ) {
    	return 'Aprovado';
    } else{
      return 'Erro!';
    };
};

module.exports = { gets, print, validaNota };
```

* Código principal:

```
/*File: main.js*/

const { gets, print, validaNota } = require('./prog2.js');


for (let notas = gets(); notas !== undefined; notas = gets()) {
	const nota = notas; 
    print(`A nota do aluno foi de ${nota}.\nO aluno está ${validaNota(nota)}!`);
    print('>>>>>>>>>>>>><<<<<<<<<<<<<<\n');
};
```

Saídas:

```
A nota do aluno foi de 8.7.
O aluno está Aprovado!
>>>>>>>>>>>>><<<<<<<<<<<<<<

A nota do aluno foi de 4.9.
O aluno está Reprovado!
>>>>>>>>>>>>><<<<<<<<<<<<<<

A nota do aluno foi de 9.
O aluno está Aprovado!
>>>>>>>>>>>>><<<<<<<<<<<<<<

A nota do aluno foi de 5.5.
O aluno está Recuperação!
>>>>>>>>>>>>><<<<<<<<<<<<<<

A nota do aluno foi de 3.4.
O aluno está Reprovado!
>>>>>>>>>>>>><<<<<<<<<<<<<<

A nota do aluno foi de 7.7.
O aluno está Aprovado!
>>>>>>>>>>>>><<<<<<<<<<<<<<

A nota do aluno foi de 10.
O aluno está Aprovado!
>>>>>>>>>>>>><<<<<<<<<<<<<<
```