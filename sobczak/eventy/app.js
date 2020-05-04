
const kasa = document.querySelector("#kasa");
const pracuj = document.querySelector("#pracuj");
const licencja = document.querySelector("#licencja");
const czyZdana = document.querySelector("#czyZdana");
const rodzice = document.querySelector("#rodzice");
const rodziceTekst = document.querySelector("#rodziceTekst");

let mnoznik = 1;
let pieniadze = 0;
let licencjaZdana = false;
let ilePracowalRodzice = 0;
let easterEgg = false;



function odswiezKase(){
    kasa.innerHTML = pieniadze;
}

function sprzatanieInfo(){
    if (ilePracowalRodzice >= 40){
        rodziceTekst.innerHTML = "Możesz posprzątać dom"
    }
    else{
        rodziceTekst.innerHTML = "W domu jest czysto"
    }
}

pracuj.addEventListener("click", function (event) {
    pieniadze = pieniadze + 25 * mnoznik ;
    ilePracowalRodzice = ilePracowalRodzice + 1;
    sprzatanieInfo();
    odswiezKase();
});

licencja.addEventListener("click", function (event){
    if (pieniadze >= 5000 && licencjaZdana === false){
        pieniadze = pieniadze - 5000;
        mnoznik = mnoznik * 2;
        licencjaZdana = true;
        czyZdana.innerHTML = "Masz uprawnienia (nie możesz zdać ich po raz drugi)"
        odswiezKase();
    }
    else if (easterEgg === true){
        czyZdana.innerHTML = "za błędy się płaci"
        easterEgg = false;
        licencjaZdana = false;
        pieniadze = pieniadze - 5000;
        odswiezKase();
    }
    else if(pieniadze >= 5000 && licencjaZdana === true){
        easterEgg = true;
        czyZdana.innerHTML = "Czytać nie umiesz? chyba ci powinni zabrać tę licencję"
    }
});

rodzice.addEventListener("click", function (event){
    if (ilePracowalRodzice >= 40){
        pieniadze = pieniadze + parseInt(Math.random()*2000);
        ilePracowalRodzice = 0;
        odswiezKase()
        sprzatanieInfo()
    }
});
