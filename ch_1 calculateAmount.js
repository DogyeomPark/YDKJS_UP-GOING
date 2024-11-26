const SPENDING_THRESHOLD = 500;
const MOBILE_PRICE = 129.99;
const ACCESSORY_PRICE = 32.06;
const TAX_RATE = 0.07;

let bank_balance = 648.97;
let amount = 0;

function calculateTax(amount){
    return amount * TAX_RATE;
}

function formatAmount(amount){
    return "$" + amount.toFixed( 3 );
}

while (amount < bank_balance) {
    amount += MOBILE_PRICE;

    if(amount < SPENDING_THRESHOLD){
        amount += ACCESSORY_PRICE;
    }
}

function reduceAmount(amount) {
    console.log("Reducing amount...");

    while (amount > bank_balance) {
        if (amount - ACCESSORY_PRICE >= bank_balance) {
            amount -= ACCESSORY_PRICE;
            console.log("Removed an accessory. New amount : " + formatAmount(amount));
        } else if (amount - MOBILE_PRICE >= 0) {
            amount -= MOBILE_PRICE;
            console.log("Removed a mobile. New amount: " + formatAmount(amount));
        } else {
            console.log("No more items to remove.");
            break;
        }
    }
    return amount;
}

    amount = amount + calculateTax(amount);

    console.log("your purchase: " + formatAmount(amount));

    if (amount > bank_balance) {
        console.log("Ummm maybe you should check your bank balance...");
        amount = reduceAmount(amount);
    }

    console.log("Final purchase amount: " + formatAmount(amount));