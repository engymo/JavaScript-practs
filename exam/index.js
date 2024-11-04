// var strat=""
// for(var i=0; i<5; i++){
//     strat+="*";
//     console.log(strat)
// }
// var x=10;
// var y=8;
// if(x<y){
//     console.log("max")
// }

// else{
//     console.log("min")
// }
// var names="sara"
// console.log(typeof(x));
// console.log(typeof(names))



// var test = new Date();
// console.log(test);


// function calcPrice(price,tax,markiting){
//    var result1=price+tax
//    var result2=price*markiting
//    console.log(result1+result2)
// }
// calcPrice(500,20,300)



// عشان اضيف ul واعدل عليها من الجافا واروح اكتبه في html
// var box=""
// for(var i=0; i<5; i++){
//    box+="<li>engy</li>"
// }
// document.getElementById("uls").innerHTML=box;
// console.log("box");


// طريقة الجدول في الجافاسكريبت


var productName = document.getElementById("product-name");
var productPrice = document.getElementById("product price");
var productCategry = document.getElementById("product-catgry");
var productDescription = document.getElementById("text-aera");
var bttn2 = document.getElementById("bttn2");
var addBtn=document.getElementById("add-btn")
var products = []
addBtn.onclick=function(){
   var product ={
      name:productName.value ,
      price:productPrice.value ,
      catgry:productCategry.value ,
      descraption:productDescription.value 
   }
products.push(product)

display()


}
function display(){
   var cartona=``;
   for(var i=0 ;i<products.length ;i++){

      cartona+=`<tr><td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].catgry}</td>
      <td>${products[i].descraption}</td>

      </tr>`
   }
document.getElementById("body-table").innerHTML=cartona


} 












