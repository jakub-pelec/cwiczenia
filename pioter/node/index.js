const axios = require("axios");

const isIdBiggerThan60 = (value) => {
    return (value.id > 60);
};

const asyncFunction = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const usersTab = data.data;
    const usersTabFiltered = usersTab.filter(isIdBiggerThan60);
    return usersTabFiltered;
};
const printData = async (asyncFunction) => {
    const usersTabWithPostsIdBiggerThan60 = await asyncFunction();
    console.log(usersTabWithPostsIdBiggerThan60);
};

//printData(asyncFunction);

const asyncFunctionUsers = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    usersTab = data.data;
    usersTabFiltered = usersTab.filter((element)=> element.id > 5);
    usersTabMapped = usersTabFiltered.map((element)=>{
        return {name: element.name, email: element.email}
    })
    console.log(usersTabMapped);
}

asyncFunctionUsers();