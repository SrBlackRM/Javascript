function Timer(){
    let relogio = document.querySelector('.relogio');
    let timer;
    return {
        cron: document.querySelector('#timer'),
        horas: 0,
        minutos: 0,
        segundos: 0,

        inicia(){
            relogio.innerHTML = 'Aperte iniciar';
            this.pegaCliques();
        },

        pegaCliques(){
            this.cron.addEventListener('click', e => {
                const element = e.target;

                if(element.classList.contains('zerar')){
                    this.zeraTimer();
                };
                if(element.classList.contains('iniciar')){
                    this.iniciaTimer();
                };
                if(element.classList.contains('pausar')){
                    this.pausaTimer();
                };
            });
        },

        zeraTimer(){
            relogio.innerHTML = '00:00:00';
            this.segundos = 0;
            clearInterval(timer);
            relogio.style.color = 'blue';
        },

        iniciaTimer(){
            timer = setInterval(() => {
                this.segundos++;
                relogio.innerHTML = this.criaHoraAPartirDosSegundos(this.segundos);
            }, 1000);
            relogio.style.color = 'black';
        },

        pausaTimer(){
            clearInterval(timer);
            relogio.style.color = 'red';
        },

        criaHoraAPartirDosSegundos(segundos){
            const data = new Date(segundos * 1000);
            return data.toLocaleTimeString('pt-BR', {
                hour12: false,
                timeZone: 'UTC'
            }); 
        }
    }
}

const timer = Timer();
timer.inicia();