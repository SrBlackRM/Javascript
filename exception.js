function soma(x, y) {
    if(
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        throw('x e y precisam ser números.');
    }
    return x + y;
}

try {
    //TENTA EXECUTAR, PODE GERAR ERRO
    console.log(soma('1', 2));
} catch(e) {
    //EXECUTADO QND OCORRE ERRO
    console.log(e);
} finally {
    //SEMPRE É EXECUTADO
}