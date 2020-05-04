const input = document.querySelector("#input");
const licznik = document.querySelector("#licznik");
const button = document.querySelector("#przycisk");
const text = document.querySelector("#tekst");
const clear = document.querySelector("#clear");
const submit = document.querySelector("#submit");
let textToShow;

clear.addEventListener("click",(event) => {
    licznik.innerHTML = 0;
});

button.addEventListener("click", function (event){
    liczba = parseInt(licznik.innerHTML);
    liczba++;
    licznik.innerHTML = liczba;
});

input.addEventListener("input",(event)=>{
    textToShow = event.target.value;
});

submit.addEventListener("click",function (event){
    text.innerHTML = textToShow;
    input.value = "";
});
