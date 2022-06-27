const textInput = document.querySelector('#text-input');
textInput.addEventListener('keyup', inserirTexto);

function inserirTexto() {
    let texto = textInput.value;
    const guardaTxt = document.getElementById('meme-text');

    guardaTxt.innerText = texto;
}

const imgInput = document.querySelector('#meme-insert');
imgInput.addEventListener('input', inserirImg);

function inserirImg(event) {
    console.log('oi')
    let container = document.querySelector('#meme-image');
    //https://www.codegrepper.com/code-examples/javascript/get+upload+image+input+data+javascript
   container.src = URL.createObjectURL(event.target.files[0]);
}

const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const dark = document.getElementById('dark');
const clear = document.getElementById('clearBorder');

fire.addEventListener('click', changeBorder);
water.addEventListener('click', changeBorder);
earth.addEventListener('click', changeBorder);
dark.addEventListener('click', changeBorder);
clear.addEventListener('click', changeBorder);

function changeBorder(event) {
    const main = document.getElementById('meme-image-container');
    const idEvent = event.target.id;

    if (idEvent === 'clearBorder') {
        main.style.border = '1px solid black';
    } else if (idEvent === 'water') {
        main.style.border = '5px double blue';
    } else if (idEvent === 'earth') {
        main.style.border = '6px groove green';
    } else if (idEvent === 'dark'){
        main.style.border = '3px solid black';
    } else {
        main.style.border = '3px dashed red';
    }

}

const imgsProntas = document.getElementsByClassName('memes-prontos');

for (let i = 0; i < imgsProntas.length; i += 1) {
    imgsProntas[i].addEventListener('click', changeImg);
}

function changeImg(event) {
    const img = event.target;
    const container = document.getElementById('meme-image');
    container.src = img.src;

    // if (img.id === 'meme-1') {
    //     container.src = '/imgs /meme1.png';
    // } else if (img.id === 'meme-2') {
    //     container.src = '/imgs /meme2.png';
    // } else if (img.id === 'meme-3') {
    //     container.src = '/imgs /meme3.png';
    // } else {
    //     container.src = '/imgs /meme4.png';
    // }    
    
}

