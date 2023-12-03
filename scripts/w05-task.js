/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
   temples.forEach((temple) =>{
    let article = document.createElement('article');
    // temple name element
    let templeName = document.createElement('h3');
    templeName.textContent = temple.templeName;
    // temple image element
    let img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.templeName);
    //temple location element
    let location = document.createElement('h4');
    location.textContent = temple.location;
    //append child
    article.appendChild(templeName);
    article.appendChild(img);
    article.appendChild(location);
    document.querySelector('#temples').appendChild(article);
   });
};


/* async getTemples Function using fetch()*/

const getTemples = async() => {
  const response = await fetch(
    'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'
  );
  templeList = await response.json();
  displayTemples(templeList);
};

getTemples();

/* reset Function */

const reset = () => {
  document.querySelector('#temples').innerHTML = '';
}

/* sortBy Function */

const sortBy = (temples) => {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter((temple) => temple.location.includes('Utah')));
        break;
      case 'notutah':
        displayTemples(temples.filter((temple) => !temple.location.includes('Utah')));
        break;
      case 'older':
        displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case 'all':
        displayTemples(temples);
        break;
      default:
        console.log('Invalid filter');
    }
};

/* Event Listener */

document.getElementById('sortBy').addEventListener('change', () => {sortBy(templeList)});

getTemples();