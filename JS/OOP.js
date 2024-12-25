var purchase1 = {
    shoes: 10,
    statTax: 1.2,
    totalPrice: function() {
        var cal = purchase1.shoes * purchase1.statTax; 
        console.log("total price:", cal);
    }
}

purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    statTax: 1.2,
    totalPrice: function() {
        var cal = this.shoes * this.statTax; 
        console.log("total price:", cal);
    }
}

purchase2.totalPrice();