const input = document.querySelector("#input");
const licznik = document.querySelector("#licznik");
const button = document.querySelector("#przycisk");
const text = document.querySelector("#tekst");
input.addEventListener("input",function (event){
    text.innerHTML = event.target.value;
});

button.addEventListener("click", function (event){
    liczba = parseInt(licznik.innerHTML);
    liczba++;
    licznik.innerHTML = liczba;
});

