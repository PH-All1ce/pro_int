let num = Math.random() * 100;
let arendondar = Math.floor(num);
let resul = '';
let l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!abcdefghijklmnopqrstuvwxyz';

function ale() {

    console.log(arendondar);

    for( let i = 0; i < num; i++) {
        const indAle = Math.random() * l.length
        const ind = Math.floor(indAle);

        resul += l[ind];
    }

    console.log(resul);
    console.log(resul.length);
}
ale()
