let input = document.getElementById('note');
let btn = document.getElementById('btn');
let parag = document.getElementById('txtnote');

btn.onclick = function(){
    parag.innerHTML += `<p>${input.value}</p>`;
}
