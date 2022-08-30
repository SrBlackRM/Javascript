const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');
const btnApagar = document.querySelectorAll('.btn-apagar');

btnAddTarefa.addEventListener('click', e => {
    criaTarefa(inputNovaTarefa.value);
    apagaInput();
    salvarTarefas();
});

inputNovaTarefa.addEventListener('keypress', e => {
    if(e.keyCode === 13) {
        criaTarefa(inputNovaTarefa.value);
        apagaInput();
        salvarTarefas();
    }
});

document.addEventListener('click', e => {
    const el = e.target;

    if(el.classList.contains('btn-apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
});

function criaTarefa(textoInput){
    if(textoInput != '') {
        const li = criaLi();
        const inputCheckBox = criaInputCheckBox();

        li.setAttribute('class','item-lista item-tarefa');
        inputCheckBox.setAttribute('class', 'checkbox checkbox-tarefa'); 
        li.appendChild(inputCheckBox);
        li.appendChild(criaH(4,textoInput));
        li.appendChild(criaBotao('apagar'));
        tarefas.appendChild(li);
    }
}

function apagaInput(){
    inputNovaTarefa.value = "";
    inputNovaTarefa.focus();
}

function criaLi(){
    const li = document.createElement("li");
    return li;
}

function criaInputCheckBox(){
    const input = document.createElement("input");
    input.setAttribute('type','checkbox');
    return input;
}

function criaH(tam, texto){
    const h = document.createElement("h"+tam);
    h.innerText = texto;
    return h;
}

function criaBotao(texto){
    const botao = document.createElement("button");
    botao.innerText = texto;
    botao.setAttribute('class','btn-'+texto);
    return botao;
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar','');
        if(tarefaTexto != 'SELECIONAR TUDO'){
            listaDeTarefas.push(tarefaTexto.trim());
        }
    }
    //converte um elemento javascript para json (lista)
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    //converte um elemento json para um elemento javascript
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}

adicionaTarefasSalvas();