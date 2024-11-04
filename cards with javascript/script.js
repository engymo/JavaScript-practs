// cards

let names = ['ali', 'ahmed', 'salah', 'mustafa']
let ages = ['12 years old', '16 years old','22 years old','24 years old']
let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign='center';

// element with cards function

function element(names,ages)
  {
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // content

    let head = document.createTextNode(names);
    let ageContent = document.createTextNode(ages);
    img.src = 'client-8.png';
    title.appendChild(head);
    age.appendChild(ageContent);


    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);

    // style

    card.style.background = '#444';
    card.style.color = '#fff';
    card.style.width = '300px';
    img.style.width = '100%';
    card.style.display = 'inline-block';
    card.style.margin = '2px';

}
for(let i=0; i<4; i++)
{
    element(names[i], ages[i]);
}

