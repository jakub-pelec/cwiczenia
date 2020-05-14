const readline = require("readline-sync");
const {v4: uuidv4} = require('uuid');

const generateObject = () => {
    const name = readline.question("What's your name? : ");
    const surname = readline.question("What's your surname? : ");
    const age = readline.question("How old are you? : ");
    const city = readline.question("Where have you been born? : ");
    const uuid =  uuidv4();
    return {
        uuid: uuid,
        data: {
            name: name,
            surname: surname,
            age: age,
            whereBorn: city
        }
    };
};

const firstPerson = generateObject();
console.log(firstPerson);