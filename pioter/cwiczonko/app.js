const readline = require("readline-sync");
const uuid = require('uuid');

const generateObject = () => {
    const name = readline.question("What's your name? : ");
    const surname = readline.question("What's your surname? : ");
    const age = readline.question("How old are you? : ");
    const whereBorn = readline.question("Where have you been born? : ");
    const id = uuid.v4();
    return {
        id,
        data: {
            name,
            surname,
            age,
            whereBorn,
        }
    };
};

const firstPerson = generateObject();
console.log(firstPerson);