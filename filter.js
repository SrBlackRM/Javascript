// filter map e reduce são muito usadas no dia a dia
// filter sempre retorna um array com a mesma quantidad ou menos que o 
// array original e não o altera, diferente do map que altera o vetor original 
const numeros = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];


// o filter recebe uma função de callback, podemos criar fora
// function callback(valor, indice, array){
//     if(valor > 10){
//         return true;
//     }else{
//         return false;
//     }
// }

// podemos, ainda com a funcao de callback fora do filter, reduzi-la a condicao ternaria
// function callback(valor, indice, array){
//     return( valor > 10 ? true : false );
// }

// ou melhopr ainda, podemos incluir direto no filter com array function
//  const numerosFiltrados = numeros.filter(valor => {return valor > 10;});

// por fim, reduzindo drasticamente a array function visto que o resultado
// so pode ser true or false

// const numerosFiltrados = numeros.filter(valor => valor > 50);
// console.log(numerosFiltrados);

// baseado em verdadeiro e falso

// BRINCANDO COM FILTER

const pessoas = [
    { nome: 'Michel', idade: 25},
    { nome: 'Jade', idade: 22},
    { nome: 'Simone', idade: 46},
    { nome: 'Mauro', idade: 45},
    { nome: 'Arthur', idade: 1},
];

//retornar as pessoas cujo nome termina com e
const pessoasFinalE = pessoas.filter(valor => valor.nome.endsWith('e'));
console.log("\nPESSOAS CUJA ULTIMA LETRA É 'E':")
for (let pessoa of pessoasFinalE){
    console.log(pessoa['nome']);
}

//retornar pessoas acima dos 30 anos
const pessoasAcimaDos30 = pessoas.filter(valor => valor.idade >= 30);
console.log("\nPESSOAS ACIMA DOS 30:")
for (let pessoa of pessoasAcimaDos30){
    console.log(pessoa.nome,'cuja idade é',pessoa.idade);
}