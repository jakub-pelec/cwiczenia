const input = document.querySelector("#input");
const mojDiv = document.querySelector("#moj-div");
const mojSpan = document.querySelector("#moj-span");
const mojButton = document.querySelector("#moj-button");

/*
element .addEventListener
dodaje eventListener di danego elementu z drzewa
przyjmuje 2 argumenty:
 @param {string} type = typ eventu np input
 @param {function}
*/
input.addEventListener("input" , function(event){
    const value = event.target.value;
    mojDiv.innerHTML = value;
});

mojButton.addEventListener("click" , function(event){
    const liczba = parseInt(mojSpan.innerHTML);
    mojSpan.innerHTML = liczba +1;
})