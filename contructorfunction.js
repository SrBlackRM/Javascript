//DIFERENTE DA FACTORY
//JA CRIA E RETORNA OBJETOS JA INSTANCIADOS


//FABRIC -> objetos

//CONSTRUCT -> precisa sempre iniciar seu nome com letra maiuscula
// Pessoa(new)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + " " + this.sobrenome);
    };
}

const p1 = new Pessoa("Michel","Mota");

p1.metodo();

// operação ternária 
// const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario vip' : 'usuario normal';