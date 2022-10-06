let count = 1;

function scrollThroughImages(){
let pokedex = document.getElementById('viewer-window');
    pokedex.innerHTML = `<img class="pokepic" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`;
}

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = function () {
    if (count > 1){
    count = count - 1;
        scrollThroughImages();
        }
}

next.onclick = function () {
    if (count < 649){
    count = count + 1;
        scrollThroughImages();
        }
}

scrollThroughImages();