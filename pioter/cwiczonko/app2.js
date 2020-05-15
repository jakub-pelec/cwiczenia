const readline = require("readline-async");
const uuid = require('uuid');

const main =  new Promise((resolve, reject) => {
    console.log("What's your name? : ");
    const name = readline().then(text => {
        console.log("What's your surname? : ");
        return text;
    });
    const surname = readline().then(text => {
        console.log("How old are you? : ");
        return text;
    });
    
    const age = readline().then(text => {
        console.log("Where have you been born? : ");
        return text;
    });
    const whereBorn = readline().then(text => {
        return text;
    })
    
    resolve(Promise.all([name,surname,age,whereBorn]).then((values)=>{
        return {
            id: uuid.v4(),
            data: {
                name: values[0],
                surname: values[1],
                age: values[2],
                whereBorn: values[3]
            }
        }
    }));
});

main.then((value) => {
    console.log(value);
});