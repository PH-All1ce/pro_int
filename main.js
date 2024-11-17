let inp = document.getElementById('userInput');

function enviar() {
    let inpu = String(inp.value);

    let res = document.getElementById('span2');

    if( inpu === '') {
        alert('Informe uma pergunta campeão.')
    } else {
        inp.value = '';

        let per = document.getElementById('span1');
        per.innerHTML = inpu;

        res.style.alignItems = 'flex-start'

        if (res.length > 10 ) {
            let parte1 = res.slice(0, 67);
            let parte2 = res.slice(67);
            res.innerHTML += parte1 + '<br>' + parte2;
        } else {
            res.innerHTML = ale();
        }
    }
}

let num = Math.random() * 100;
let arendondar = Math.floor(num);
let l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!abcdefghijklmnopqrstuvwxyz';

function ale() {
    let resul = '';

    for( let i = 0; i < num; i++) {
        const indAle = Math.random() * l.length
        const ind = Math.floor(indAle);

        resul += l[ind];
    }

    return resul;
}

function ant() {
    
}

 /* T t y */