const top7 = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
];

const [] = top7;
const [first, second, third, ...secondVisit] = top7;

console.log(`2ns_visit: ${secondVisit}`)
console.log(`1st: ${first}`)
console.log(`2nd: ${second}`)
console.log(`3rd: ${third}`)

//---- in function ----
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item);
}

let shoppingChart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingChart)
