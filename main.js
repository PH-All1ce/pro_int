function enviar() {


    let inp = document.getElementById('userInput');
    let inpu = String(inp.value);

    let res = document.getElementById('span2');

    if( inpu === '') {
        alert('Informe uma pergunta campeão.')
    } else {
        inp.value = '';

        let per = document.getElementById('span1');
        per.innerHTML = inpu;

        res.style.alignItems = 'flex-start'
        res.innerHTML = ale();
    }
}

let num = Math.random() * 100;
let arendondar = Math.floor(num);
let resul = '';
let l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!abcdefghijklmnopqrstuvwxyz';

function ale() {

    for( let i = 0; i < num; i++) {
        const indAle = Math.random() * l.length
        const ind = Math.floor(indAle);

        resul += l[ind];
    }

    return resul;
}

 /* T t y */