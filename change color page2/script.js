let btnn = document.querySelector('#btn');

btnn.addEventListener('click', randomBg);

function randomBg() {

    document.body.style.backgroundColor ='#' + Math.random().toString(16).slice(2, 10);
}
randomBg()