/* Fetch Example */
const url = "https://jsonplaceholder.typicode.com/todos";
const options = {
    method: "GET",
};
fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

/* axios example */

const url1 = 'https://jsonplaceholder.typicode.com/posts'
const data1 = {
    a: 10,
    b: 20,
};
axios
    .post(url1, data1, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
    })
    .then(({ data }) => {
        console.log(data);
    });