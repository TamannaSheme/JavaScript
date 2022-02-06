function factorialFunction(fact) {
    // factorialSum = 0;
    factorialOfNumber = 1;
    for (var i = 1; i <= fact; i++) {
        var factorialOfNumber = factorialOfNumber * i;
        // factorialSum = factorialSum + factorialOfNumber;

    }
    // return factorialSum;
    return factorialOfNumber;
}


console.log(factorialFunction(3));


// while loop
function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

console.log(getFactorial(5));


// decremental way factorial {


function decrementalFactorial(num) {
    let facto = 1;
    let i = num;
    while (i >= 1) {
        facto = facto * i;
        i--;
    }
    return facto;
}

console.log(decrementalFactorial(7));