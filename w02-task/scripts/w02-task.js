/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Jennifer Beukers';
const d = new Date();
let year = d.getFullYear();
let profilePicture = 'images/At_the_Beach.JPG';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');
/* const imageElement = document.getElementById('image'); */

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
yearElement.textContent = year;
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);

/* Step 5 - Array */

let food = ['Steak',' Burgers',' Anything not cooked by me'];
foodElement.innerHTML = `${food}`; 
let chocolate = ' Chocolate ';
food.push(chocolate);
foodElement.innerHTML += `<br>${food}`;
food.shift();
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;



