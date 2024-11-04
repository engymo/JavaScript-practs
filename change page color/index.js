
if(localStorage.length > 0 ){
    document.body.style.background = localStorage.getItem('bgcolor');
}   

function setColor (color)
{
    localStorage.setItem('bgcolor', color);
    document.body.style.background = color;
}



let txt = document.getElementById('txt');

if (localStorage.length > 0){
    txt.value = localStorage.getItem('txt')
}

txt.onkeyup = function(){
    localStorage.setItem('txt', txt.value)
}