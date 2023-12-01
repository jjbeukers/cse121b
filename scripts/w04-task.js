/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Jen Beukers',
    photo: 'images/At_the_Beach.jpg',
    favoriteFoods: [
        'Steak',
        'Burgers',
        'Chocolate',
        'Tacos',
        'Anything not cooked by me'
    ],
    hobbies: [
        'Gardening',
        'Hiking',
        'Camping',
        'Baking'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLived objects */

myProfile.placesLived.push(
    {
        place: 'Hurricane, UT',
        length: '13 Years'
    },
    {
        place: 'Logan, UT',
        length: '3 Years'
    },
    {
        place: 'Albuquerque, NM',
        length: '6 Years'
    },
    {
        place: 'Petersboro, UT',
        length: '2 Years'
    }
);

/* DOM Manipulation - Output */
/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
