# Arrays

## Descrição

Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de travessia e mutação. Nem o tamanho de um array JavaScript nem os tipos de elementos são fixos. Já que o tamanho de um array pode ser alterado a qualquer momento e os dados podem ser armazenados em posições não contíguas, arrays JavaScript não tem a garantia de serem densos.

Arrays **não podem usar strings** como índices (como em um array associativo), devem ser usados números inteiros. Definir ou acessar não-inteiros usando notação de colchetes (ou notação de ponto) não vai definir ou recuperar um elemento do array em si, mas sim definir ou acessar uma variável associada com a coleção de propriedades de objeto daquele array. As propriedades de objeto do array e a lista de elementos do array são separados, e as operações de travessia e mutação não podem ser aplicadas a essas propriedades nomeadas.


### Criando um Array

```
var frutas = ["Maçã", "Banana"];

console.log(frutas.length); // length informa o tamanho do Array
```
> 2

### Acessando elementos de um array

Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição 0 e o último elemento está na posição equivalente ao valor da propriedade `length` (tamanho) menos 1.

```
var arr = ["este é o primeiro elemento", "este é o segundo elemento"];
console.log(arr[0]); 
```
> este é o primeiro elemento


```
console.log(arr[1]);
```
> este é o segundo elemento


```
console.log(arr[arr.length - 1]);
```
> este é o segundo elemento


Elementos de um array são somente propriedades de objetos, da forma que `toString` é uma propriedade. Contudo, note que tentando acessar o primeiro elemento de um array da seguinte forma causará um erro de sintaxe, pois o nome da propriedade é inválido:

```
console.log(arr.0);
```

> console.log(arr.0);
>            ^^^
>
> SyntaxError: missing ) after argument list
>    at wrapSafe (internal/modules/cjs/loader.js:1063:16)
>    at Module._compile (internal/modules/cjs/loader.js:1111:27)
>    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1167:10)
>    at Module.load (internal/modules/cjs/loader.js:996:32)
>    at Function.Module._load (internal/modules/cjs/loader.js:896:14)
>    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
>    at internal/main/run_main_module.js:17:47


### Acessar um item (index) do Array

```
var frutas = ["Maçã", "Banana"];
var primeiro = frutas[0];
```
> Maçã

```
var ultimo = frutas[frutas.length - 1];
```
> Banana

### Iterar um Array

Podemos iterar sobre um array usando o `for`:

```
var frutas = ["Maçã", "Banana"];
  
for(let i in frutas){
	console.log(`* ${frutas[i]}`);
};
```
> * Maçã
> * Banana

Podemos acessar o índice e o valor com o `for`:

```
var frutas = ["Maçã", "Banana"];

for(let i in frutas){
	console.log(`* Indice: ${i} -- Valor: ${frutas[i]}`);
};
```
> * Indice: 0 -- Valor: Maçã
> * Indice: 1 -- Valor: Banana

Outra forma de acesso ao índice e valor é usando o `forEach`:

```
frutas.forEach(function (item, indice, array) {
  console.log(item, indice);
});
```
> * Maçã 0
> * Banana 1

### Adicionando e removendo valores de uma lista

**Adicionar um item ao final do Array**:

Para adicionarmos um elemento ao final de um Array basta usarmos o método `push()`:

```
var frutas = ["Maçã", "Banana"];

frutas.push("Laranja");

frutas.forEach(function (item, indice, array) {
  console.log(`* ${item} ${indice}`);
});
```
> * Maçã 0
> * Banana 1
> * Laranja 2

**Remover um item do final do Array**

Para removermos um elemento ao final de um Array basta usarmos o método `pop()`:

```
frutas.pop();
console.log(frutas[frutas.length -1]);
```
> Banana

**Remover do início do Array**

Para removermos um elemento no início de um Array basta usarmos o método `shift()`:

```
var primeiro = frutas.shift(); // remove Maçã do início
// ['Banana'];
```

**Adicionar ao início do Array**
Para adicionarmos um elemento no início de um Array basta usarmos o método `unshift()`:

```
frutas.unshift("Morango"); // adiciona ao início
// ['Morango', 'Banana'];
```

**Outras formas de manipular um Array**

Podemos fazer muitas coisas com Arrays, até declararmos uma variável `const variavel = [];` e ainda assim, teriamos a possibilidade de adicionar ou remover elementos deste Array, mas por conceito é preferível usarmos `let` ou `var`. 

```
let alunos = ['João', 'Victor', 'Mariana']; 
console.log(alunos); // [ 'João', 'Victor', 'Mariana' ]

alunos.push('Renan');
console.log(alunos); // [ 'João', 'Victor', 'Mariana', 'Renan' ]

alunos[4] = 'Vinícius';
console.log(alunos); // [ 'João', 'Victor', 'Mariana', 'Renan', 'Vinícius' ]

alunos[3] = 'Jose';
console.log(alunos); // [ 'João', 'Victor', 'Mariana', 'Jose', 'Vinícius' ]

alunos = [];
console.log(alunos); // []
```

### Procurar o índice de um item na Array

```
frutas.push("Manga");
// ['Morango', 'Banana', 'Manga']

var pos = frutas.indexOf("Banana");
// 1
```

### Remover um item pela posição do índice

```
var removedItem = frutas.splice(pos, 1); // é assim que se remove um item
// ['Morango', 'Manga']
```

### Remover itens de uma posição de índice

```
var vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
console.log(vegetais);
// ['Repolho', 'Nabo', 'Rabanete', 'Cenoura']

var pos = 1,
  n = 2;

var itensRemovidos = vegetais.splice(pos, n);
// Isso é como se faz para remover itens, n define o número de itens a se remover,
// a partir da posição (pos) em direção ao fim da array.

console.log(vegetais);
// ['Repolho', 'Cenoura'] (o array original é alterado)

console.log(itensRemovidos);
// ['Nabo', 'Rabanete']
```

### Copiar um Array

```
var copiar = frutas.slice(); // é assim que se copia
// ['Morango', 'Manga']
```

## Exercícios de fixação:

1. Calcule a média final de um aluno:

```
// Declarando variáveis
let notas = [];
let soma = 0;
let media = 0;


// Adicionando elementos ao Array
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(5);
notas.push(8);


// Somando as notas através do for
for(let i in notas){ 
	soma += notas[i];
};

/*
O mesmo efeito teríamos com:
    for(let i = 0; i < notas.length; i++){
        soma += notas[i];
    };
*/

// Calculando a média
media = (soma/notas.length);
console.log(`A média é: ` + media.toFixed(2));
```
> A média é: 6.50

2. Refatorando o Código acima usando funções:

```
// Calcula a soma
function somar(notas){
	let soma = 0;
    
    for (let i in notas){
    	soma += notas[i];
    };
    
    return soma;
};

// Calcula a média
function calcularMedia(soma, tamanho){
	return soma/tamanho;
};

function main(){
	
    // Criando Array
	let notas = [5, 7, 8, 6, 10];

    //Invocando funções de cálculos
    const soma = somar(notas);
	const media = calcularMedia(soma, notas.length);

    //Retornando resultado de forma amigável
	console.log(`A média é: ` + media.toFixed(2));
};

main();
```
> A média é: 7.20

3. Refatore o mesmo código usando POO:

```
// Criando a Classe
class calcluarMediaAluno {

    notas = [];

    // Criando constructor
    constructor (notas){
    	this.notas = notas;
    }
    
    // Criando o método `somar`
    somar(){
    
		let soma = 0;
       	for (let i in this.notas){
    		soma += this.notas[i];
    	};
        return soma;
	}
    
    // Criando o método `calcularMedia`
    calcularMedia(){
    	
        return this.somar()/this.notas.length;
	}

}

// Instanciando objeto `aluno1` e imprimindo média
let array = [5, 7, 8, 6, 10];
const aluno1 = new calcluarMediaAluno(array);
console.log(`* A média do aluno 1 é ${aluno1.calcularMedia()}`);

// Instanciando objeto `aluno2` imprimindo média
const aluno2 = new calcluarMediaAluno([10, 10, 10]); 
console.log(`* A média do aluno 2 é ${aluno2.calcularMedia()}`);
```
> * A média do aluno 1 é 7.2
> * A média do aluno 2 é 10

4. Crie um programa que dado um número imprima sua tabuada:

```
function tabuada(numero){
	console.log(`\nTabuada do número ${numero}:`)
	for (let i = 1; i <= 10; i++){
		console.log(`${numero} x ${i} = ${numero * i}`);
	};
};

tabuada(2);
tabuada(4);
tabuada(7);
```

5. Crie um programa que seja capaz de percorrer uma lista de números e imprima apenas os números pares:

```
function imprimeNumeroPar(array){

	for (let i in array){
    	if (array[i] % 2 == 0){
        	console.log(`* ${array[i]}`);
        }
    }
}

imprimeNumeroPar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```
> * 0
> * 2
> * 4
> * 6
> * 8
> * 10


6. Refatorar o código acima: 

```
function imprimeNumeroPar(array){

	let resultado = [];
	for (let i in array){
    	if (array[i] % 2 == 0){
        	resultado.push(array[i]);
        }
    }
    return resultado;
}

console.log(imprimeNumeroPar([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```
> [ 0, 2, 4, 6, 8, 10 ]

* Uma solução linear seria:

```
const numerosPares = [];
    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

console.log(numerosPares);
```
> [ 0, 2, 4, 6, 8 ]

# Referencia

[MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)