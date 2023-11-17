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

function addNumbers(){
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

function addNumbers(){
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


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
