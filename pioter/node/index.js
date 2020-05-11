const axios = require("axios");

const isIdBiggerThan60 = (value) => {
    return (value.id > 60);
};

const asyncFunction = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const usersTab = data.data;
    const usersTabFiltered = usersTab.filter(isIdBiggerThan60);
    console.log(usersTabFiltered);
};

asyncFunction();