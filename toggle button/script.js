let myInput = document.getElementById('password');
let btnEl = document.getElementById('btn');


btnEl.onclick = function () {
    if (btnEl.innerHTML == "show") {
        btnEl.innerHTML = "hide";
        myInput.type = 'text'; 
    }
    else{
        btnEl.innerHTML == "hide"
            btnEl.innerHTML = "show";
            myInput.type = 'password'; 
    }
}
