/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function addNumbers(){
    // read from input fields
    const num1 = parseInt(document.getElementById('add1').value);
    const num2 = parseInt(document.getElementById('add2').value);
    // get the sum of the input numbers
    const sum = add(num1, num2);
    // place the sum into the browser field
    const answerField = document.getElementById('sum');
    answerField.value = sum;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function Subtract(num1, num2){
    const difference = num1 - num2;
    return difference;
}

function subtractNumbers(){
    // read from input fields
    const num1 = parseInt(document.getElementById('subtract1').value);
    const num2 = parseInt(document.getElementById('subtract2').value);
    // get the difference of the input numbers
    const difference = Subtract(num1, num2);
    // place the difference into the browser field
    const answerField = document.getElementById('difference');
    answerField.value = difference;
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

function Multiply(num1, num2){
    const product = num1 * num2;
    return product;
}

function multiplyNumbers(){
    // read from input fields
    const num1 = parseInt(document.getElementById('factor1').value);
    const num2 = parseInt(document.getElementById('factor2').value);
    // get the product of the input numbers
    const product = Multiply(num1, num2);
    // place the product into the browser field
    const answerField = document.getElementById('product');
    answerField.value = product;
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function Divide(num1, num2){
    const quotient = num1 / num2;
    return quotient;
}

function divideNumbers(){
    // read from input fields
    const num1 = parseInt(document.getElementById('dividend').value);
    const num2 = parseInt(document.getElementById('divisor').value);
    // get the quotient of the input numbers
    const quotient = Divide(num1, num2);
    // place the quotient into the browser field
    const answerField = document.getElementById('quotient');
    answerField.value = quotient;
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

// Define function 'Get Total Due'

function discount(subtotal){
    const total = subtotal * 0.85;
    return total;
}

function applyDiscount(){
    // read from input fields
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    // conditional Logic
    var check = document.getElementById('member');
    if (member.checked){
        // member gets a 15% discount = subtotal * 0.85 
        total = discount(subtotal);
    }else{
        // no discount
       total = subtotal;
    }
    // place the total dollar amount into the browser field
    // Not the actual total
    const span_total = document.getElementById('total');
    span_total.textContent = ('$' + total.toFixed(2));
}

document.getElementById('getTotal').addEventListener('click', applyDiscount);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.getElementById('array').innerHTML = numbersArray

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(number => (number+1) % 2 === 0);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.getElementById('sumOfArray').innerHTML = numbersArray.reduce(arraySum);

function arraySum(total, number){
    return total + number;
}

/* Output Multiplied by 2 Array */

document.getElementById('multiplied').innerHTML = numbersArray.map(double);

function double(x){
    return x * 2;
}

/* Output Sum of Multiplied by 2 Array */

document.getElementById('sumOfMultiplied').innerHTML = numbersArray.map(double).reduce(add);

function double(x){
    return x * 2;
}

function add(sum, x){
    return sum + x;
}