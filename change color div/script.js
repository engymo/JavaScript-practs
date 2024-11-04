// var btnEl = document.querySelector(".btn");
// var boxEl = document.querySelector(".box"); 

// var colors = ["red", "green", "blue"];
// var i = 0;

// btnEl.onclick = function() {
//    boxEl.style.backgroundColor = colors[i];
//    i++; 
//    if(i == 3) {
//     i=0 ;
//    }
// }
// // alert ('test');


// get all element from html 
let btnEl = document.querySelector(".btn");
let boxEl = document.querySelector(".box");


let colors = ["red", "green", "yellow"];

let i = 0 ;

btnEl.onclick = function () {
   boxEl.style.backgroundColor = colors[i];
   i++;
   if (i == 3){
      i=0;
   }
}