// REDUCE geralmente reduz um array em um unico elemento

const numeros = [5,50,80,1,2,3,4,5,8,7,11,15,22,27];
//recebe um acumulador (diferente de map e filter)

const total = numeros.reduce((acumulador, valor, indice, array) => {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(total);

// retorna a pessoa mais velha
const pessoas = [
    { nome: 'Michel', idade: 25},
    { nome: 'Jade', idade: 22},
    { nome: 'Simone', idade: 46},
    { nome: 'Mauro', idade: 45},
    { nome: 'Yadabao', idade: 1023},
    { nome: 'Arthur', idade: 1},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor)=>{
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0);

console.log(pessoaMaisVelha);