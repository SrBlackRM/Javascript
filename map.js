// MAP usa o valor do array original e tem sempre o mesmo tamanho dele
// diferente do filter, nao faz um filtro, e sim, mapeia e modifica todos os
// elementos do array
// funciona exatamente igual a funcao filter, mas não se baseia em
// verdadeiro e falso
// pois exibe o retorno em si

const numeros = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];
const numerosDobrados = numeros.map(number => number*0);
console.log(numerosDobrados);

const pessoas = [
    { nome: 'Michel', idade: 25},
    { nome: 'Jade', idade: 22},
    { nome: 'Simone', idade: 46},
    { nome: 'Mauro', idade: 45},
    { nome: 'Arthur', idade: 1},
];

//retorna apenas os nomes do array
const nomes = pessoas.map(pessoa => pessoa.nome);
const idades = pessoas.map(pessoa => pessoa.idade);
const pessoasID = pessoas.map((pessoa, indice) => pessoa.id = (indice+1)*2374);
console.log(nomes);
console.log(idades);
console.log(pessoasID);