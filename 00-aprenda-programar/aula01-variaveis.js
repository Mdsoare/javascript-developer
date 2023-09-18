// INTRODUÇAO:

// JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos 
// com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, 
// mas usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat. 

// O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, 
// suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional). 

// SINTAXE E TIPOS:

// O JavaScript pega emprestado a maior parte de sua sintaxe do Java, mas também é influenciado por Awk, Perl e Python.
// O JavaScript é case-sensitive e usa o conjunto de caracteres Unicode.
// Por exemplo, a palavra Früh (que significa "cedo" em Alemão) pode ser usada como nome de variável.

var Früh = "foobar";
// Mas a variável früh não é a mesma que Früh porque JavaScript é case sensitive.

// No JavaScript, instruções são chamadas de declaração e são separadas por um ponto e vírgula (;). 
// Espaços, tabulação e uma nova linha são chamados de espaços em branco. 

// O código fonte dos scripts em JavaScript são lidos da esquerda para a direita 
// e são convertidos em uma sequência de elementos de entrada como simbolos, caracteres de controle, 
// terminadores de linha, comentários ou espaço em branco.

// COMENTÁRIOS:

// A sintaxe dos comentários em JavaScript é semelhante como em C++ e em muitas outras linguagens:

// comentário de uma linha

/* isto é um comentário longo
   de múltiplas linhas.
 */

// /* Você não pode, porém, /* aninhar comentários */ SyntaxError */

// DECLARAÇÕES:

// Existem três tipos de declarações em JavaScript

// var   >>> Declara uma variável, opcionalmente, inicializando-a com um valor.
// let   >>> Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
// const >>> Declara uma constante de escopo de bloco, apenas de leitura. É obrigatório iniciá-la com valor.

// DECLARANDO VARIÁVEIS:
 
// var   >>> Esta sintaxe pode ser usada para declarar tanto variáveis locais como variáveis globais.
var texto = 'Hello World!';
console.log (texto);
// Podemos alterar o valor da variável declarada com var:
texto = 'Hello World Again!'
console.log (texto);

// let   >>> Essa sintaxe pode ser usada para declarar uma variável local de escopo de bloco.
let numero = 10;
console.log(numero);
// Também podemos alterar o valor da variável declarada com let:
numero = 20;
console.log (numero); 

// const  >>> A declaração de const não pode ser alterada!
const pi = 3.14;
console.log(pi);

// CLASSIFICANDO VARIÁVEIS:

// Uma variável declarada usando a declaração var ou let sem especificar o valor inicial tem o valor 'undefined'.
// Uma tentativa de acessar uma variável não declarada resultará no lançamento de uma exceção 'ReferenceError'

// EXEMPLO:
var a;
console.log("O valor de a é " + a); // saída "O valor de a é undefined"
console.log("O valor de b é " + b); // executa uma exception de erro de referência (ReferenceError)

// Podemos usar 'undefined' para determinar se uma variável tem um valor. 
// No código a seguir, não é atribuído um valor de entrada na variável 
// e a declaração if será avaliada como verdadeira (true).

var input;
if (input === undefined) {
  facaIsto();
} else {
  facaAquilo();
}

// O valor undefined se comporta como falso (false), quando usado em um contexto booleano.
// Por exemplo, o código a seguir executa a função myFunction devido o elemento myArray ser undefined:

var myArray = [];
if (!myArray[0]) myFunction();

// O valor undefined converte-se para NaN quando usado no contexto numérico.

var a;
a + 2; // Avaliado como NaN

// Quando se avalia uma variável nula, o valor nulo se comporta como 0 em contextos numéricos 
// e como falso em contextos booleanos. Por exemplo:

var n = null;
console.log(n * 32); // a saída para o console será 0.

// ESCOPOP DE VARIÁVEIS:

// Quando é declarada uma váriavel fora de qualquer função, ela é chamada de variável global, 
// porque está disponível para qualquer outro código no documento atual. 

// Quando se declara uma variável dentro de uma função, é chamada de variável local, 
// pois ela está disponível somente dentro dessa função.

// JavaScript antes do ECMAScript 6 não possuía escopo de declaração de bloco; 
// pelo contrário, uma variável declarada dentro de um bloco de uma função é uma variável local 
// (ou contexto global) do bloco que está inserido a função. 
// Por exemplo o código a seguir exibirá 5, porque o escopo de x está na função 
// (ou contexto global) no qual x é declarado, não o bloco, que neste caso é a declaração if.

if (true) {
    var x = 5;
  }
  console.log(x); // 5

// Esse comportamento é alterado, quando usado a declaração let introduzida pelo ECMAScript 6

if (true) {
    let y = 5;
  }
  console.log(y); // ReferenceError: y não está definido

// VARIÁVEL DE ELEVAÇÃO:

// Outra coisa incomum sobre variáveis em JavaScript é que se pode utilizar a variável e declará-la depois,
// sem obter uma exceção. Este conceito é conhecido como hoisting; 
// variáveis em JavaScript são num sentido "hoisted" ou lançada para o topo da função ou declaração. 
// No entanto, as variáveis que são "hoisted" retornarão um valor undefined. 
// Então, mesmo ao se usar ou referir a variável e depois declará-la e inicializá-la, 
// ela ainda retornará undefined.

/**
 * Exemplo 1
 */
console.log(x === undefined); // exibe "true"
var x = 3;

/**
 * Exemplo 2
 */
// retornará um valor undefined
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

// Devido o hoisting, todas as declarações var em uma função devem ser colocadas no início da função. 
// Essa recomendação de prática deixa o código mais legível.

// VARIÁVEIS GLOBAIS

// Variáveis globais são propriedades do objeto global. Em páginas web o objeto global é a window, 
// assim pode-se configurar e acessar variáveis globais utilizando a sintaxe window.variavel.
// Consequentemente, pode-se acessar variáveis globais declaradas em uma janela ou frame ou frame de outra janela. 
// Por exemplo, se uma variável chamada phoneNumber é declarada em um documento,
// pode-se consultar esta variável de um frame como parent.phoneNumber.

// CONSTANTES 

// Podemos criar uma constante apenas de leitura por meio da palavra-chave 'const'.
// A sintaxe de um identificador de uma constante é semelhante ao identificador de uma variável: 
// deve começar com uma letra, sublinhado ou cifrão e pode conter caractere alfabético, numérico ou sublinhado.

const PI = 3.14;

// Lembrando que uma constante não pode alterar seu valor por meio de uma atribuição 
// ou ser declarada novamente enquanto o script está em execução. 
// Deve ser inicializada com um valor.

// As regras de escopo para as constantes são as mesmas para as váriaveis let de escopo de bloco. 
// Se a palavra-chave const for omitida, presume-se que o identificador represente uma variável.

// Não podemos declarar uma constante com o mesmo nome de uma função ou variável que estão no mesmo escopo. 
// Por exemplo:

// Isto irá causar um  erro
function f() {}
const f = 5;

// Isto também irá causar um erro.
function f() {
  const g = 5;
  var g;

  //declarações
}

// FONTE:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps

//Teste online:
// https://developer.mozilla.org/pt-BR/play