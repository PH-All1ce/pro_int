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
        if (!priperg) {
            aside.style.display = 'flex';
            aside.style.flexWrap = 'wrap';
            aside.style.flexDirection = 'column';
            aside.style.marginLeft = '100px';
            priperg = true;
        }
        inp.value = '';

        let per = document.getElementById('span1');
        per.innerHTML = question;

        const respostaAleatoria = ale();
        res.innerHTML = respostaAleatoria;

        perguntasRespostas.push({ pergunta: question, resposta: respostaAleatoria});

        const listItem = document.createElement('li');
        listItem.textContent = question;
        listItem.addEventListener( 'click', function() {
            exibirPerguntaAnterior(perguntasRespostas.length - 1);
        });
        listItem.style.cursor = 'pointer';
        listItem.style.marginLeft = '20px';

        list.appendChild(listItem);

        res.style.alignItems = 'flex-start'
    }
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
