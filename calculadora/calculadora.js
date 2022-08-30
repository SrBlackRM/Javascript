window.onload = function() {
    function criaCalculadora(){
        return{
            //ATRIBUTOS
            display: document.querySelector('.display'),      


            //INICIALIZANDO
            inicia(){
                this.clickBotoes();
                this.pressionaEnter();
            },

            //METODOS
            clickBotoes(){
                document.addEventListener('click', e => {
                    const el = e.target;

                    if(el.classList.contains('btn-num')){
                        this.btnParaDisplay(el.innerText);
                    }

                    if(el.classList.contains('btn-clear')){
                        this.clearDisplay();
                    }

                    if(el.classList.contains('btn-del')){
                        this.deleteOne();
                    }

                    if(el.classList.contains('btn-eq')){
                        this.realizaConta();
                    }
                });
            },

            btnParaDisplay(valor){
                this.display.value += valor;
            },

            clearDisplay(){
                this.display.value = '';
            },

            deleteOne(){
                this.display.value = this.display.value.slice(0, -1);
            },

            realizaConta(){
                let conta = this.display.value;

                try{
                    conta = eval(conta);
                    if(!conta){
                        alert('Conta invalida');
                        return;
                    }

                    this.display.value = String(conta);
                }catch(e){
                    alert('Conta invalida');
                    return;
                }
            },

            pressionaEnter(){
                this.display.addEventListener('keyup', e => {
                    if(e.keyCode === 13){
                        this.realizaConta()
                    }
                });
            }
        };
    }

    const calculadora = criaCalculadora();
    calculadora.inicia();
}