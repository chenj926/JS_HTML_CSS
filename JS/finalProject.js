// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (dish of dishData) {
        let finalPrice;

        if (taxBoolean === true) {
            finalPrice = dish.price * tax;
        } else if (taxBoolean === false) {
            finalPrice = dish.price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }

        console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
    }
    
}

// Implement getDiscount()
function getDiscount(taxBoolean, guest) {
    getPrices(taxBoolean);

    if (typeof(guest) === "number" && guest > 0 && guest < 30) {
        let discount = 0;

        if (guest < 5) {
            discount = 5;
        } else if (guest >= 5) {
            discount = 10;
        } 
    
        console.log('Discount is: $' + discount);
        
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
getDiscount(true, 2);
getDiscount(false, 10);