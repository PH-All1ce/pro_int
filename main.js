let inp = document.getElementById('userInput');
let aside = document.getElementById('content-aside');
let priperg = false;
let perguntasRespostas = [];

function enviar() {
    let inpu = String(inp.value);
    const question = inp.value.trim();
    const list = document.getElementById('list-ques');

    let res = document.getElementById('span2');

    if( question === '') {
        alert('Informe uma pergunta campeão.')
    } else {
        inp.value = '';

        let per = document.getElementById('span1');
        per.innerHTML = question;

        const respostaAleatoria = ale();
        res.innerHTML = respostaAleatoria;

        perguntasRespostas.push({ pergunta: question, resposta: respostaAleatoria});

        const listItem = document.createElement('li');
        listItem.textContent = question;
        listItem.dataset.index = perguntasRespostas.length - 1;
        listItem.addEventListener('click', function() {
            const index = this.dataset.index;
            exibirPerguntaAnterior(Number(index));
        }) 
        

        listItem.style.cursor = 'pointer';
        listItem.style.marginLeft = '20px';

        list.appendChild(listItem);

        res.style.alignItems = 'flex-start'
    }
}

function dark() {
    let dark = document.getElementById('fundo');
    dark.style.backgroundImage = 'linear-Gradient(to right, #000A32, #092262, #7D51A0, #BE69AA)';
}

function norm() {
    let norm = document.getElementById('fundo');
    norm.style.backgroundImage = 'linear-Gradient(to right, #035e8c, #075e90, #016b9c, #01456d, #082838)';
}

function ale() {
    let num = Math.floor(Math.random() * 100) + 10;
    let l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!abcdefghijklmnopqrstuvwxyz';
    let resul = '';

    for( let i = 0; i < num; i++) {
        const indAle = Math.random() * l.length
        const ind = Math.floor(indAle);

        resul += l[ind];
    }

    return resul;
}

function exibirPerguntaAnterior(index) {
    if (index >= 0 && index < perguntasRespostas.length) {
        const pergunta = perguntasRespostas[index].pergunta;
        const resposta = perguntasRespostas[index].resposta;

        document.getElementById('span1').innerHTML = pergunta;
        document.getElementById('span2').innerHTML = resposta;
    }
}
 /* T t y */
