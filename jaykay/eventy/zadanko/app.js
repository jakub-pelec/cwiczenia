const pyry = document.querySelector("#pyry");
const guzikDodatni = document.querySelector("#guzik-dodatni");
const guzikUjemny = document.querySelector("#guzik-ujemny");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const mojDiv = document.querySelector("#moj-div");
let input1Value;
let input2Value;

guzikDodatni.addEventListener("click", function (event) {
    pyry.innerHTML = parseInt(pyry.innerHTML) +1;
});
guzikUjemny.addEventListener("click", function(event) {
    pyry.innerHTML = parseInt(pyry.innerHTML) -1;
});
function isDupa() {
    if(input1Value === "dupa" && input2Value === "dupa") {
            mojDiv.innerHTML = "trzecia dupa"
        
    }
};

input1.addEventListener("input", function(event) {
    const value = event.target.value;
    input1Value = value;
    isDupa();
});
input2.addEventListener("input", function(event) {
    const value = event.target.value;
    input2Value = value;
    isDupa();
});

const zadanko = [1,4213,541,55,13534,5,43534,6,34,1,341,5,12,51,634,5,345,34,534,534,534,534,534,4534532]
function isDzielna(tablica) {
    for(let i = 0; i < tablica.length; i++) {
    if(tablica[i] % 2 === 0 && tablica[i] % 3 === 0) {
        console.log(tablica[i] + " jest podzielna przez 6")
        }
    }
};
isDzielna(zadanko)
