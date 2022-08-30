// Além do for normal, for in e for of, tem o foreach

// exemplo for normal

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// exemplo de for in (so pode ser usado em array, assim como for of e foreach)

 const diasDaSemana = ['segunda','terça','quarta','quinta','sexta','sabado','domingo'];
// for ( let dias in diasDaSemana ){
//     // o for in, criamos um indice que itera a cada elemento do array
//     console.log(dias);
//     // se quisermos ver o valor de cada elemento do array usamos o indice
//     console.log(diasDaSemana[dias]);
// }

// exemplo de for of

// como no exemplo anterior, a diferença é que não retorna indices, retorna os valores
// for ( let dias of diasDaSemana ){
//     // retorna cada elemento do array
//      console.log(dias);
//  }


// AGORA O FOREACH, muito parecido com o map e o filter, mas só itera
// é como se fosse uma junção de for in e for of, onde da para usar o valor
// e tambem o indice ao mesmo tempo

diasDaSemana.forEach((valor, indice, array) => {
    console.log(indice, valor)
});