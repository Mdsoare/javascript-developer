# Trabalhando com Classe

Observamos que trabalhar com Objetos JSON pode ser útil para um tipo de dados, mas e se quisermos criar um modelo e depois instanciarmos ele?

## Classes

Ao cria um "molde" de um cadastro podemos fazer uso de `class`:

```
// Criando uma classse chamada 'cadastro'
class cadastro {
    // Atributos da classe
	nome;
    idade;
    altura;

    // Método para resgatar um atributo. Para saber mais pesquise sobre getters e setters!
    getCadastro(){
    	console.log(`Usuário(a) cadastrado(a) com sucesso!\n\n* Nome: ${this.nome}\n* Idade: ${this.idade}\n* Altura: ${this.altura}`);
        console.log('\n<--------------------------------->\n');    
    };
};
```

## Instanciando a classe (criando objetos)

```
// Instanciando objeto do tipo cadastro usando `new`
let usuario1 = new cadastro();

// Inserindo dados
usuario1.nome = "José de Arimatéia";
usuario1.idade = 35;
usuario1.altura = 1.73;

// Criando outro objeto
let usuario2 = new cadastro();
```

Observe que podemos criar vários objetos do tipo `cadastro` e não precisamos inserir os atributos ao criar o objeto

## Resgatando os dados:

Para sabermos o que temos na classe, podemos invocar o método `getter` criado:

```
usuario1.getCadastro();
usuario2.getCadastro();
```
Saída:

> Usuário(a) cadastrado(a) com sucesso!
> 
> * Nome: José de Arimatéia
> * Idade: 35
> * Altura: 1.73
> 
> <--------------------------------->
> 
> Usuário(a) cadastrado(a) com sucesso!
> 
> * Nome: undefined
> * Idade: undefined
> * Altura: undefined
> 
> <--------------------------------->

## Definindo o `constructor`

Para definirmos quais atributos são obrigatórios ao criarmos os Objetos de uma classe, devemos incluir no código o método **constructor**. Vejamos novamente o código:

```
//criando uma classse
class cadastro {
	// O construtor que define como serão instanciados os objetos e seus atributos
    constructor(nome, idade, altura){
    	this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    };
    // Método para resgatar um atributo. Para saber mais pesquise sobre getters e setters!
    getCadastro(){
    	console.log(`Usuário(a) cadastrado(a) com sucesso!\n\n* Nome: ${this.nome}\n* Idade: ${this.idade}\n* Altura: ${this.altura}`);
        console.log('\n<--------------------------------->\n');
    };
};
```

## Instanciando uma classe (criando Objeto)

Instanciando dois objetos do tipo cadastro usando `new`

```
const usuario1 = new cadastro("José de Arimatéia", 35 , 1.73);
const usuario2 = new cadastro("Zaqueu Publicano", 29 , 1.51);

// Resgatando dados dos objetos:
usuario1.getCadastro();
usuario2.getCadastro();
```
Saída:

> Usuário cadastrado com sucesso!
>
> * Nome: José de Arimatéia
> * Idade: 35
> * Altura: 1.73
>
> <--------------------------------->
>
> Usuário cadastrado com sucesso!
>
> * Nome: Zaqueu
> * Idade: 29
> * Altura: 1.51
>
> <--------------------------------->