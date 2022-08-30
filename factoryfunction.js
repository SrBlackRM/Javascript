function pessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            console.log("Nome: ",nome,"\nsobrenome: ",sobrenome,"\nfala: ", assunto);
        },

        //GETTER
        get nomeCompleto(){
            return nome + ' ' + sobrenome;
        },
    }
}

p1 = pessoa("Michel", "Mota")

console.log(p1.nomeCompleto)

p1.nomeCompleto = "Manoel Miranda"

console.log(p1.nomeCompleto)