/* synchronously */

// const ticket = new Promise((resolve, reject) => {
//     const isBoarded = true;

//     if (isBoarded) {
//         resolve("You are in the flight");
//     }
//     else {
//         reject("your flight has been cancelled");
//     }
// });

// ticket.then((data) => {
//     console.log("wohoo.!", data);
// }).catch((data) => {
//     console.log("oh no.!", data);
// }).finally(() => {
//     console.log("I will always be executed.!");
// });

/* ################################################################################## */

/* Asynchronusly */

function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    });
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍩";
            resolve(dough);
        }, 2000);
    });
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);
    });
}

/* using promises chaining method */

getCheese().then((cheese) => {
    console.log("here is the cheese", cheese);
    return makeDough(cheese) /* makedough function itself return promise so we get his data in then */
}).then((dough) => {
    console.log("here is the dough", dough);
    return bakePizza(dough);
}).then((pizza) => {
    console.log("here is pizza", pizza);
}).catch((data) => {
    console.log("Error occured..!", data);
}).finally(() => {
    console.log("Process Ended.");
})