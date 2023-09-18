# números e operadores
[Fonte](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Math#comparison_operators)

## Operadores lógicos: AND, OR e NOT

Quando desejamos testar várias condições sem escrever instruções aninhadas **if...else**, os **operadores lógicos** poderão nos ajudar. Quando usado em condições, os dois primeiros fazem o seguinte:

- **&& — AND** — permite encadear duas ou mais expressões para que todas elas tenham que ser avaliadas individualmente como **true** assim toda a expressão retorna **true**.

- **|| — OR** — permite encadear duas ou mais expressões para que uma ou mais delas tenham que ser avaliadas individualmente como **true** assim toda a expressão retorna **true**.
- **! — NOT** — Pode ser usado para negar uma expressão, ou seja, inverte seu valor original.

## Operadores aritméticos

São os operadores que utilizamos para fazer as operações aritiméticas básicas:

| Operador | Nome | Propósito | Exemplo |
| -------------- | -------------- | ---------------------------------------- | -------------------- |
| + | Adição | Adiciona um número a outro | 6 + 9 |
| - | Subtração | Subtrai o número da direita do número da esquerda | 20 - 15 |
| * | Multiplicação | Multiplica um número pelo outro | 3 * 7 |
| / | Divisão | Divide o número da esquerda pelo número da direita | 10 / 5 |
| % | Restante ou módulo | Retorna o resto da divisão em números inteiros do número da esquerda pelo número da direita | 8 % 3 (retorna 2) |

### Precedência de operador

A precedência de operadores em JavaScript é semelhante ao ensinado nas aulas de matemática na escola — Multiplicação e divisão são realizados primeiro, depois a adição e subtração (a soma é sempre realizada da esquerda para a direita).

### Operadores de incremento e decremento

Às vezes desejamos adicionar ou subtrair, repetidamente, um valor de uma variável numérica. Convenientemente isto pode ser feito usando os operadores incremento **++** e decremento **--**. Exemplo de uso:

```
contagemPalpites++;
```
Será acrescido 1 a variável **contagemPalpites**

## Operadores de atribuição

Operadores de atribuição são os que atribuem um valor à uma variável. Nós já usamos o básico, =, muitas vezes, simplesmente atribuindo à variável do lado esquerdo o valor indicado do lado direito do operador:

```
var x = 3; // x contém o valor 3
var y = 4; // y contém o valor 4
x = y; // x agora contém o mesmo valor de y, 4
```

Mas existem alguns tipos mais complexos, que fornecem atalhos úteis para manter seu código mais puro e mais eficiente. Os mais comuns estão listados abaixo:

| Operador | Nome | Propósito | Exemplo |
| -------------- | -------------- | ---------------------------------------- | -------------------- |
| += | Atribuição de adição	| Adiciona o valor à direita ao valor da variável à esquerda e, em seguida, retorna o novo valor da variável |	x = 3; x += 4;	x = 3; x = x + 4; |
| -= | Atribuição de subtração	| Subtrai o valor à direita do valor da variável à esquerda e retorna o novo valor da variável	| x = 6; x -= 3;	x = 6; x = x - 3; |
| *= | Atribuição de multiplicação	| Multiplica o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável	| x = 2; x *= 3;	x = 2; x = x * 3; |
| /= | Atribuição de divisão	| Divide o valor da variável à esquerda pelo valor à direita e retorna o novo valor da variável |	x = 10; x /= 5;	x = 10; x = x / 5; |

Note que podemos muito bem usar outros valores no lado direito de cada expressão, por exemplo:

```
var x = 3; // x contém o valor 3
var y = 4; // y contém o valor 4
x *= y; // x agora contém o valor 12
```

## Operadores de comparação

Às vezes, queremos executar testes verdadeiro / falso e, em seguida, agir de acordo, dependendo do resultado desse teste, para fazer isso, usamos operadores de comparação.

| Operador | Nome | Propósito | Exemplo |
| -------------- | -------------- | ---------------------------------------- | -------------------- |
| === | Igualdade estrita | Verifica se o valor da esquerda e o da direita são idênticos entre si | 5 === 2 + 4 |
| !== | Não-igualdade-estrita |	Verifica se o valor da esquerda e o da direita não são idênticos entre si | 5 !== 2 + 3 |
| <	| Menor que	| Verifica se o valor da esquerda é menor que o valor da direita | 10 < 6 |
| >	| Maior que	| Verifica se o valor da esquerda é maior que o valor da direita | 10 > 20 |
| <= | Menor ou igual que | Verifica se o valor da esquerda é menor que ou igual ao valor da direita | 3 <= 2 |
| >= | Maior ou igual que | Verifica se o valor da esquerda é maior que ou igual ao valor da direita | 5 >= 4 |