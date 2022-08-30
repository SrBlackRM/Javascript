const data = new Date();

const dia = data.getDate();
const diasem = data.getDay();
const mes = data.getMonth();
const ano = data.getFullYear();

const horas = data.getHours();
const mins = data.getMinutes();
const secs = data.getSeconds();


function diadasemana(dia){
    switch(dia){
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta-Feira';
        case 6:
            return 'Sabado';
    }
}

function mesdoano(mes){
    switch(mes){
        case 0:
            return 'Janeiro';
        case 1:
            return 'Fevereiro';
        case 2:
            return 'Março';
        case 3:
            return 'Abril';
        case 4:
            return 'Maio';
        case 5:
            return 'Junho';
        case 6:
            return 'Julho';
        case 7:
            return 'Agosto';
        case 8:
            return 'Setembro';
        case 9:
            return 'Outubro';
        case 10:
            return 'Novembro';
        case 11:
            return 'Dezembro';
    }
}


console.log(dia,'de',mesdoano(mes),'de',ano,' - ',diadasemana(diasem),':')

function mostraHora(){
    let data = new Date()
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    }); 
}

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 4000);