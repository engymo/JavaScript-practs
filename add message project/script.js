// get element and but it in variable

let text = document.getElementById('txt');
let btn = document.getElementById('btn');
let msg = document.getElementById('pra');


btn.onclick = function() {
   let inputValue = text.value;
   if(inputValue != ''){

    msg.innerHTML = inputValue;
    
    //    empty input value
    
    text.value = ''
   }
 

}





// let inputEl = document.getElementById("text");
// let btnEl = document.getElementById("btn");
// let msg = document.getElementById("pra");


// btnEl.onclick = function() {
//    var inputValue = inputEl.value;
//    console.log(inputValue);
 


// }