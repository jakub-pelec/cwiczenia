// FUNKCJE

function nazwa(parametry) {
    body;
    return costam;
};

// dlugie body funkcji
const nazwa = (parametry) => {
    body;
    return costam;
};

// implicit return, wykonuje sie i od razu zwraca

const nazwa = parametry => parametry;

// jeden parametr

const nazwa = parametry => {
    body;
    return costam;
};


// DESTRUKTURYZACJA

const object = {
    imie: 'Tomek',
    wiek: 20
}

console.log(object.imie);

const fun = () => {
    const {imie} = object;
    console.log(imie);
}

const array = [1,2,3,5];

// dupa = array[0]
// nowaDupa = array[1]

const [dupa, nowaDupa, ...costam] = array;

//SPREAD

const arek = {
    imie: 'Arek',
    wiek: 13,
    narodowosc: 'Polska'
}

const nowyTomek = {
    ...arek,
    imie: 'Tomek v2',
}