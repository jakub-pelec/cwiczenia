/*
    document.querySelector:
        wybiera element z domu
        @param {string} selector - selektor po ktorym szukamy elementu, id - #, klasa - .
*/

const input = document.querySelector('#input');
const mojDiv = document.querySelector('#moj-div');
const mojSpan = document.querySelector('#moj-span');
const mojButton = document.querySelector('#moj-button');


/*
    element.addEventListener:
        dodaje eventListener do danego elementu z drzewa
        przyjmuje 2 argumenty: 
            @param {string} type - typ eventu np input
            @param {function} funkcja - funkcja anonimowa wykonywania przy kazdym wywolaniu elementu
*/

input.addEventListener('input', function (event) {
    const value = event.target.value;
    mojDiv.innerHTML = value;
});

mojButton.addEventListener('click', function(event) {
    mojSpan.innerHTML = parseInt(mojSpan.innerHTML) + 1;
});
