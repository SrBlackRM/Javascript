// CRIAÇÃO
// const pessoa = {
//     nome: 'Michel',
//     sobrenome: 'Mota',
// };

// é possivel criar objetos da seguinte forma
// const pessoa1 = new Object();
// pessoa1.nome = 'Michel';
// pessoa1.sobrenome = 'Mota';
// pessoa1.idade = 25;
// pessoa1.getNomeCompleto = function(){
//     return (`${this.nome} ${this.sobrenome}`);
// };
// pessoa1.getDataNascimento = function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };
// console.log(pessoa1.getNomeCompleto(),'nascido em',pessoa1.getDataNascimento());


// ACESSO
// console.log(pessoa.sobrenome);

// podemos também acessar atraves dos []

// console.log(pessoa.['nome']);
// nesse caso, é interessante quando não sabemos a chave ou queremos uma chave
// dinamica


// MOLDE
// Podemos usar factorys functions ou Constructor functions para criar molde de objetos
// alem disso, podemos criar classes

// function Pessoa(nome, sobrenome, idade){
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//     this.idade = idade;

//     this.getNomeCompleto = function(){
//         return (`${this.nome} ${this.sobrenome}`);
//     };

//     this.getDataNascimento = function(){
//         const dataAtual = new Date();
//         return dataAtual.getFullYear() - this.idade;
//     };

//     this.exibeInfo = function(){
//         console.log(this.getNomeCompleto(),'nascido em',this.getDataNascimento());
//     };
// }

// // ela cria um objeto vazio, atrela a palavra 'this' e retorna os valores de 'this'
// p1 = new Pessoa('Michel', 'Mota', 25);
// p2 = new Pessoa('Jade', 'Rainha', 22);

// console.log(p1.getDataNascimento());
// p2.exibeInfo();

// podemos utilizar o freeze para "travar" um objeto, não sendo possivel mais
// modifica-lo, inclusive excluí-lo

// para conseguir fazer isso com algum atributo especifico. usa defineProperty
// e defineProperties

// function Produto(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;
//     // nao colocamos estoque aqui, para definir as propriedades
//     // em defineProperty

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,     // pode ser exibido sim ou nao
//         value: estoque,       // define valor
//         writable: false,      // valor pode ser alterado sim ou nao
//         configurable: false   // chave pode ser configuravel (alterar/apagar)
//     }); // com isso, podemos definir
//     // propriedade de objetos 

//     //Object.keys(objeto) mostra as chaves do objeto

//     // da mesma forma, poderiamos definir propriedades de varias
//     // 'chaves' de um objeto atraves do Object.defineProperties()
// }


// GETTERS e SETTERS
// para evitar problemas no codigo, usamos os getters e setters
// getters servem para retornar o valor de alguma chave do objeto
// setters sao uteis para tratamento das entradas, evitando problemas, exemplo
// espara-se um numero, e é passado uma string, isso geraria um erro
// podemos usar o setter para verificar, corrigir ou só levantar exceções

// function Produto(nome, preco, estoque){
//     this.nome = nome;
//     this.preco = preco;
//     // nao colocamos estoque aqui, para definir as propriedades
//     // em defineProperty

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,     
//         configurable: false,
//         get: function(){
//             return estoque;
//         },
//         set: function(valor){
//             if(typeof valor !== "number"){
//                 console.log("digite um numero")
//                 return
//             }
//         },
//     }); 
    

//     //Object.keys(objeto) mostra as chaves do objeto

//     // da mesma forma, poderiamos definir propriedades de varias
//     // 'chaves' de um objeto atraves do Object.defineProperties()
// }


// nas funcoes factory, podemos criar as funcoes get e set direto
// get nome() set nome();


// Podemos copiar as chaves de um objeto para outro, sem mexer no original
// 'espalhando', o objeto original

// asism: 
// const produto = { nome: 'Produto', preco: 1.8};
// const caneca = { ...produto, material: 'porcelana'};
// caneca.nome = 'caneca'
// console.log(produto, caneca)

// é possivel também atraves do Object.assign({}, produto, {material: 'porcelana'});
