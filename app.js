function sum(a, b) {
    return a + b;
}

console.log(sum(7, 3));

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
};

function fromDollarToYen(valueInDollar) {
    return valueInDollar / 1.2 * 127.9;
}

function fromYenToPound(valueInYen) {
    return valueInYen / 127.9 * .8;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };