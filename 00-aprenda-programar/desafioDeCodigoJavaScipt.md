# Desafios de Código - Formação JavaScript Developer

## 1/3 Média final do aluno

Faça um programa que receba a média de um aluno e imprima o seguinte:
•	Caso a média seja < 5 imprima "REP";
•	Caso a média seja >= 5 e < 7 imprima "REC";
•	Caso a média seja >7 imprima "APR".

### Entrada

A entrada consiste em vários arquivos de teste, cada um com uma linha, que conterá o valor da média do aluno. Conforme mostrado no exemplo de entrada a seguir.

### Saída

Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, será gerado uma linha com a palavra "Reprovado" caso sua média seja < 5, "Recuperação" caso sua média seja >= 5 e < 7 e "Aprovado" caso a média seja > 7. Use o exemplo abaixo para clarear o que está sendo pedido.

### Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada	| Saída |
| ------- | ----- |
|   5.5	  |  REC  |
|   8	    |  APR  |
|   2	    |  REC  |

### Código:

```
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let media = gets();

if (media < 5) {
  print('REP');
} else if  (media >= 5 && media < 7) {
  print('REC');
} else {
  print('APR');
}
```
Saída:

> * TESTE#1
> * Dado de entrada:
> * 8
> * Saída esperada:
> * APR
> * Sua Saída:
> * APR
> 
> * TESTE#2
> * Dado de entrada:
> * 5.5
> * Saída esperada:
> * REC
> * Sua Saída:
> * REC

## 2 / 3 - Maior Valor Par e Menor Valor Ímpar

Faça um programa que receba N (quantidade de números) e seus respectivos valores. Imprima o maior número par e o menor número impar. 

### Entrada

A entrada consiste em um arquivos de teste, a primeira linha receberá um valor N, referente quantidade de números que terá de entranda, as linhas seguintes terão os valores númericos maiores ou iguais a zero, podendo o número ser par ou impar. Conforme mostrado no exemplo de entrada a seguir.

### Saída

Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, a saída deverá retornar a mensagem "Maior número par: {numero}" com o maior valor par após o final do texto,  e "Menor número ímpar: {numero}" com o menor valor ímpar após o final do texto. Use o exemplo abaixo para clarear o que está sendo pedido.
 
| Exemplos de Entrada |  Exemplos de Saída   |
| ------------------- | -------------------- |
| 5                   | Maior número par: 10 |
| 3                   | Menor número impar: 1|
| 4                   |                      |
| 1                   |                      |
| 10                  |                      |
| 8	                  |                      |

### Código:

```
const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    } 
  } else if (numero % 2 != 0){ // Também poderia ser (numero % 2 == 1)
      if (numero < menorNumeroImpar) {
        menorNumeroImpar = numero;
      }
  }
  
}
       
print(`Maior número par: ${maiorNumeroPar}\nMenor número impar: ${menorNumeroImpar}`);
```

### Código Alternativo:

```
const N = gets();
const numeros = []; //Usa um array para armazenar os números informados
let maiorNumeroPar = -Infinity; //Usa o método Math.max para encontrar o maior número par
let menorNumeroImpar = Infinity; //Usa o método Math.min para encontrar o menor número ímpar

for (let i = 0; i < N; i++) {
  const numero = Number(gets()); //Converte a entrada em número e adiciona ao array
  numeros.push(numero);
}

for (const numero of numeros) { //Percorre o array de números e verifica se são pares ou ímpares
  if (numero % 2 == 0) {    
    maiorNumeroPar = Math.max(maiorNumeroPar, numero); //Atualiza o maior número par se for maior que o atual
  } else {    
    menorNumeroImpar = Math.min(menorNumeroImpar, numero); //Atualiza o menor número ímpar se for menor que o atual
  }
}

//Imprime os resultados formatados
print(`Maior número par: ${maiorNumeroPar}\nMenor número impar: ${menorNumeroImpar}`);
```
Saída:

> * 9
> * 4
> * 3
> * 12
> * 1
> 
> * Maior número par: 12
> * Menor número impar: 1 

## 3 / 3 - Cálculo Salarial

Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios. O salário a ser transferido é calculado da seguinte maneira: 
`(valor bruto do salário - percentual de imposto mediante ao salário) + adicional dos benefícios`

Para calcular o percentual de imposto segue as aliquotas:
- De R$ 0.00 a R$ 1100.00 = 5.00%
- De R$ 1100.01 a R$ 2500.00 = 10.00%
- Maior que R$ 2500.00 = 15.00%

### Entrada

A entrada consiste em vários arquivos de teste, que conterá o valor bruto do salário e adicional dos benefícios. Conforme mostrado no exemplo de entrada a seguir.

#### Saída

Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, será gerado uma linha com um número que será a diferença entre o valor bruto do salário e o percentual de imposto mediante a faixa salárial somado com o adicional dos benefícios. Use o exemplo abaixo para clarear o que está sendo pedido.

### Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada	|  Saída  |
| ------- | ------- |
| 2000    | 2050.00 |
| 250	    |         |
|         |         |
| 1100    | 1045.00 |
| 50	    |         |
|         |         |
| 3000    | 2960.00 |
| 400	    |         |

### Código

```
//Função útil para o calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    } else if (salario > 1100 && salario <= 2200) {
        aliquota = 0.10;
    } else if (salario > 2200) {
        aliquota = 0.15;
    }
    return aliquota * salario;
}

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));
```

### Código Alternativo:

```
//Função útil para o calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
    //Usa um objeto para armazenar as faixas salariais e as respectivas aliquotas
    const faixas = {
        0: 0.05,
        1100.01: 0.1,
        2500.01: 0.15
    };
    //Encontra a maior faixa salarial que é menor ou igual ao salario informado
    const faixa = Math.max(...Object.keys(faixas).filter(k => k <= salario));
    //Retorna o valor do imposto calculado com a aliquota correspondente
    return faixas[faixa] * salario;
}

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));
```
Saída:

> * Dado de entrada:
> * 5500
> * 250
> * Saída esperada:
> * 4925.00
> * Sua Saída:
> * 4925.00
> * Mensagem:

> * Dado de entrada:
> * 2000
> * 250
> * Saída esperada:
> * 2050.00
> * Sua Saída:
> * 2050.00
> * Mensagem: