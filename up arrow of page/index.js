let btn = document.getElementById('btn');

window.onscroll = function(){
    if(scrollY >= 400)
    {
        btn.style.display = 'block';
    }
    else{
        btn.style.display='none' ;  //show the button when scroll is less than
    
}
}
btn.onclick = function(){
    scroll({
        top:0,
        left:0,
        behavior:'smooth',
    })
}

console.log(screen.width);
console.log(screen.height);