/* W05: Programming Tasks */

/* Declare and initialize global variables */

const plantsElement = document.getElementById('plants');
let plantList = [];

/* async displayPlants Function */

const displayPlants = (plants) => {
   plants.forEach((plant) =>{
    let article = document.createElement('article');
    // plant name element
    let plantName = document.createElement('h3');
    plantName.textContent = plant.plantName;
    // plant image element
    let img = document.createElement('img');
    img.setAttribute('src', plant.imageUrl);
    img.setAttribute('alt', plant.plantName);
    //plant zone element
    let location = document.createElement('h4');
    location.textContent = plant.location;
    // plant date element
    let plantDate = document.createElement('h5');
    plantDate.textContent = plant.plantDate;
    //append child
    article.appendChild(plantName);
    article.appendChild(img);
    article.appendChild(location);
    article.appendChild(plantDate);
    document.querySelector('#plants').appendChild(article);
   });
};


/* async getPlants Function using fetch()*/

const getPlants = async() => {
  const response = await fetch(
    'https://jjbeukers.github.io/cse121b/scripts/plants.json'
  );
  plantList = await response.json();
  displayPlants(plantList);
};

getPlants();

/* reset Function */

const reset = () => {
  document.querySelector('#plants').innerHTML = '';
}

/* sortBy Function */

const sortBy = (plants) => {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
      case 'Zone4':
        displayPlants(plants.filter((plant) => plant.location.includes('Zone 4')));
        break;
      case 'Zone5':
        displayPlants(plants.filter((plant) => plant.location.includes('Zone 5')));
        break;
      case 'Zone6':
        displayPlants(plants.filter((plant) => plant.location.includes('Zone 6')));
        break;
      case 'Zone7':
        displayPlants(plants.filter((plant) => plant.location.includes('Zone 7')));
        break;
      default:
        console.log('Invalid filter');
    }
};

/* Event Listener */

document.getElementById('sortBy').addEventListener('change', () => {sortBy(plantList)});

getPlants();