// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 1.2;

// function convertCurrency(amount, rate) {
//     return amount * rate;
// }

// currencyTwo = convertCurrency(currencyOne, exchangeRate)
// console.log(currencyTwo)

function example() {
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
}

example();

if (true) {
    let x = 10;
    console.log(x); // 10
}
// console.log(x); // Uncaught ReferenceError: x is not defined

if (true) {
    var y = 10;
    console.log(y); // 10
}
console.log(y); // 10 (accessible outside the block)

for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
// console.log(i); // Uncaught ReferenceError: i is not defined

function example() {
    var z = 10;
    if (true) {
        var z = 20;
        console.log(z); // 20
    }
    console.log(z); // 20
}
example();
