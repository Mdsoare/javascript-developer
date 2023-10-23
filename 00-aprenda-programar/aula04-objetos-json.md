# Aula 04 - Entendendo Objetos

Para a manipulação de objetos em **JavaScript** podemos usar a estrutura JSON (JavaScript Object Notation), que é um padrão universal de transferência de dados. O formato é do tipo `{key:value}`.

Vejamos um exemplo:

```
let cadastro = {
	nome: 'João Felipe',
    idade: 28,
    altura: 1.85
};
```

## **Visualizando** os dados do objeto:

```
console.log(cadastro);
```
Saída:
> { nome: 'João Felipe', idade: 28, altura: 1.85 }

**Visualizando** um valor:
```
console.log(cadastro.nome); // OBS: Teríamos o mesmo resultado usando cadastro['nome']
```
Saída:
> João Felipe

**Função** para percorrer um JSON

```
function percorreDados(cadastro) {
	for(let index in cadastro){
       	console.log(`* ${index}: ${cadastro[index]}`);        
    }
};

percorreDados(cadastro)
```
Saída:
> * nome: João Felipe
> * idade: 28
> * altura: 1.85

## **Inserindo**, **Alterando** ou **Deletando** valores de um Objeto:

```
//Inserindo valor:
cadastro.sexo = 'Masculino';
console.log(cadastro);
```
Saída:
> { nome: 'João Felipe', idade: 28, altura: 1.85, sexo: 'Masculino' }

```
//Alterando valores:
cadastro.nome = 'Juliana de Oliveira';
cadastro.idade = 31;
cadastro.sexo = 'Feminino';
console.log(cadastro);
```
Saída:
> {  nome: 'Juliana de Oliveira',  idade: 31,  altura: 1.85,  sexo: 'Feminino' }

```
//Deletando valor:
delete cadastro.sexo;
console.log(cadastro);
```
Saída:
> { nome: 'Juliana de Oliveira', idade: 31, altura: 1.85 }

## **Métodos** em um Objeto:

```
let cadastro = {
	nome: "Juan de Nero",
    idade: 43,
    mensagem: function () {
    	console.log(`Dados cadastrados:\nNome: ${this.nome}\nIdade: ${this.idade}\n`);
    }
};

cadastro.mensagem();
```
Saída:
> Dados cadastrados:

> Nome: Juan de Nero

> Idade: 43

### **Alterando e incluindo novos métodos** dinamicamente:

```
// Alterar método
cadastro.mensagem = function (){
	console.log(`Usuário ${this.nome} cadastrado com sucesso!`);
};

cadastro.mensagem();
```
Saída:
> Usuário Juan de Nero cadastrado com sucesso!


```
//Incluindo outro método
cadastro.cancelaCadastro = function (){
	console.log(`O usuário ${this.nome} solicitou o cancelamento do cadastro`);
    console.log(`Processando...`);
    cadastro.nome = '';
    cadastro.idade = '';
    console.log('Cadastro cancelado!\n');
}

cadastro.cancelaCadastro();
console.log(cadastro);
```
Saída:

> O usuário Juan de Nero solicitou o cancelamento do cadastro

> Processando...

> Cadastro cancelado!

> {
  nome: '',
  idade: '',
  mensagem: [Function: mensagem],
  cancelaCadastro: [Function (anonymous)]
}

## Trabalhando com **lista** em um objeto:

```
let compraProdutos = {

    taxas: 98.90,
    produtos: {
    	0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129.99],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", 10000.99]
    }
};

console.log(compraProdutos);
```
Saída:
> {

>   taxas: 98.9,

>   produtos: {

>     '0': [ 'mouse 2xwm', 29.9 ],

>     '1': [ 'Teclado mecânico', 129.99 ],

>     '2': [ 'Monitor', 899.99 ],

>     '3': [ 'TV 100 polegadas', 10000.99 ]

>   }

> }

### Percorrendo uma **lista** em um objeto

```
function percorreLista(compraProdutos) {
   	for(let index in compraProdutos.produtos){
       	let [nomeProduto, precoProduto] = compraProdutos.produtos[index];
           console.log(`* ${nomeProduto}: R$ ${precoProduto}`);        
    }
};

percorreLista(compraProdutos);
```
Saída:
> * mouse 2xwm: R$ 29.9
> * Teclado mecânico: R$ 129.99
> * Monitor: R$ 899.99
> * TV 100 polegadas: R$ 10000.99
