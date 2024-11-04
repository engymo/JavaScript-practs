let myImage = document.getElementById('slidshow');
let images = ['image/(4).jpg', 'image/wall(7).jpg','image/wall(13).jpg'];
let i = 0;

function slidshow(){
    myImage.setAttribute('src', images[i]);
    if(i == images.length - 1){
        i = 0;
    }
    else{
        i++;
    }
     
    setTimeout(function() {
        slidshow();
    },2000 )
}

slidshow();
