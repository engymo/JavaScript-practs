let rowEle = document.getElementById('row');
let colmEle = document.getElementById('colm');
let btn = document.querySelector('button');


btn.addEventListener("click", creatTable);

function creatTable() {
    let body = document.body;
    let table = document.createElement("table");

    for (var i=0; i<rowEle.value; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
    
        for (var j=0; j<colmEle.value; j++){ 
            let td = document.createElement("td");
            let txt = document.createTextNode("text me");
            td.appendChild(txt);
            tr.appendChild(td);
    }
    body.appendChild(table);

} 
}