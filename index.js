let root = document.documentElement;
const map = document.getElementById('map');
const bio = document.getElementById('bio');
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const bioContainer = document.getElementById('bioContainer');

map.addEventListener("click", popUp);

function popUp() {
    bio.classList.toggle("show");
    github.classList.toggle("show");
    linkedin.classList.toggle("show");
    
    bio.addEventListener("click", () => bioContainer.classList.toggle("show"));
}


/*Change background every x sec*/

let cont = 0;
const urls = ['url("./img/amanecer.svg")','url("./img/dia.svg")','url("./img/atardecer.svg")','url("./img/noche.png")'];

setInterval(contador,10000);

function contador(){

    if(cont <=3){
        root.style.setProperty('--bg-image',urls[cont]);
        cont ++;
    } else {
        cont = 0;
    }
}



