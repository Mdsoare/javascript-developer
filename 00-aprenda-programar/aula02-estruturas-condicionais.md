# Tomando decisões no seu código — condicionais
[Fonte](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)

## Declarações if ... else

O tipo mais comum de declaração condicional usada em JavaScript é a estrutura if ... else

### Sintaxe básica
```
if (condicao) {
  codigo para executar caso a condição seja verdadeira
} else {
  senão, executar este código
}
```

1. A palavra reservada **if** seguida de um par de parênteses.
2. Um teste condicional, localizado dentro dos parênteses (normalmente "este valor é maior que esse", ou "este valor existe"). Esta condição pode fazer uso dos operadores de comparação, e podem retornar **true** ou **false**.
3. Um par de chaves, e dentro dele temos código — pode ser qualquer código que queiramos, e só vai ser executado se o teste condicional retornar true.
4. A palavra reservada **else**.
5. Outro par de chaves, dentro dele temos mais um pouco de código — pode ser qualquer código que queiramos, e só vai executar se o teste condicional retornar um valor diferente de true, neste caso **not true**, ou **false**.

Este tipo de código é bem legível por seres humanos — ele diz: "**if** a condição for **true**, execute o bloco de código A, **else** execute o bloco de código B" (**se** a condição for **verdadeira**, execute o bloco de código A, **senão** execute o bloco de código B).

Não é obrigatório o uso da palavra reservada **else** e o segundo bloco de par de chaves. O código apresentado a seguir é perfeitamente válido e não produz erros:

```
if (condicao) {
  codigo para executar se a condição for verdadeira
}

código a ser executado
```

Entretanto, é preciso cautela aqui — neste caso, repare que o segundo bloco de código não é controlado pela declaração condicional, então ele **vai executar sempre**, independente do teste condicional retornar **true** ou **false**. É claro, isto não é necessariamente uma coisa ruim, mas isso pode não ser o que se pretendia originalmente — com muita frequência o desejado é executar ou um bloco de código ou outro, não os dois juntos.

Por fim, você verá muitas vezes declarações if...else escritas sem as chaves, no seguinte estilo de escrita:

```
if (condicao) executar aqui se for verdadeira
else executar este outro codigo
```

Este é um código perfeitamente válido, mas não é recomendado — ele facilita a escrita do código fora do escopo do **if** e do **else**, o que seria mais difícil se usasse as chaves para delimitar os blocos de código, e usando multiplas linhas de código e identação.

### else if

A estrutura **if...elsa** nos fornece duas opções, mas e se quisermos mais do que isso?
Existe uma maneira de encadear escolhas/resultados extras ao seu **if...else** — usando **else if**. Cada escolha extra requer um bloco adicional para colocar entre **if() { ... } e else { ... }**


## Instruções switch

As instruções **if...else** fazem o trabalho de habilitar o código condicional bem, mas elas também possuem suas desvantagens. Elas são boas principalmente para casos em que temos algumas opções, e cada uma requer uma quantidade razoável de código para ser executado, e / ou as condições são complexas (por exemplo, vários operadores lógicos). Nos casos em que desejarmos definir uma variável para uma determinada opção de valor ou imprimir uma determinada instrução dependendo de uma condição, a sintaxe pode ser um pouco incômoda, especialmente se tivermos um grande número de opções.

As **instruções switch** são nossas amigas aqui — elas tomam uma única expressão / valor como uma entrada e, em seguida, examinam várias opções até encontrarem um que corresponda a esse valor, executando o código correspondente que o acompanha. Aqui está mais um pseudocódigo de exemplo:

```
switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}
```

Aqui nós temos:

1. A palavra-chave **switch**, seguido por um par de parênteses.
2. Uma expressão ou valor dentro dos parênteses.
3. A palavra-chave **case**, seguido por uma escolha que a expressão / valor poderia ser, seguido por dois pontos.
4. Algum código para ser executado se a escolha corresponder à expressão.
5. Uma instrução **break**, seguido de um ponto e vírgula. Se a opção anterior corresponder à expressão / valor, a execução do bloco de código aqui será interrompida e passará para qualquer código que aparecer abaixo da instrução **switch**.
6. A palavra-chave **default**, seguido por exatamente o mesmo padrão de código de um dos casos (marcadores 3 a 5), exceto que o **default** não tem escolha após ele, e você não precisa da instrução **break**, pois não há nada para executar depois disso o bloco de qualquer maneira. Esta é a opção padrão que é executada se nenhuma das opções corresponder.

#### Nota: Não é preciso incluir a seção **default** — pode-se omiti-la com segurança se não houver chance de que a expressão possa se igualar a um valor desconhecido.

## Operador ternário

O **operador ternário ou condicional** é um pequeno bit de sintaxe que testa uma condição e retorna um valor / expressão se for **true**, e outro caso seja **false** — isso pode ser útil em algumas situações e pode ocupar muito menos código que um bloco **if...else** se você simplesmente tiver duas opções escolhidas entre uma condição true/false condition. O pseudocódigo é assim:

```
( condition ) ? run this code : run this code instead
```
