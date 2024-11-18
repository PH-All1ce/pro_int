let inp = document.getElementById('userInput');
let aside = document.getElementById('content-aside');
let priperg = false;

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

        const listItem = document.createElement('li');
        listItem.textContent = question;

        list.appendChild(listItem);

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