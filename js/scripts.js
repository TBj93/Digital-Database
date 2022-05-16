let pokemonRepository = (function () {
  let pokemonList = [];

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  
  var x = document.getElementById("myDIV");
   // create  loading screen
  function hideLoadingMessage() {
    x.style.display = "none";
  }
  function showLoadingMessage() {
    x.style.display = "block";
  }

 //create modal for pokemon on screen
 function showModal(pokemon) {

  //create basic modal container
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('is-visible');

//create close button
 let closebtn = document.createElement('button');
 closebtn.classList.add('modal-close');
 closebtn.innerText = 'close';
 closebtn.addEventListener('click', hideModal);

 modalContainer.appendChild(closebtn);

let container = document.querySelector('#image-container');
let pokeImg = document.createElement('img');
 

pokeImg.src =pokemon.imageUrl;
container.appendChild(pokeImg);

  }

  /* document.querySelector('#showModal').addEventListener('click', () => {
    showModal();
  });

  */
  function hideModal() {
   
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
   

  }
  




  // load pokelist from external url
  function LoadList() {
    showLoadingMessage();
    {
      return fetch(apiUrl)
        .then(function (response) {
          hideLoadingMessage();
          return response.json();
        })
        .then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url,
            };
            hideLoadingMessage();
            add(pokemon);
          });
        })
        .catch(function (e) {
          hideLoadingMessage();
          console.error(e);
        });
    }
  }
  function loadDetails(pokemon) {
    showLoadingMessage();
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        hideLoadingMessage();
        return response.json();
      })
      .then(function (details) {
        hideLoadingMessage();
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types;
      })
      .catch(function (e) {
        hideLoadingMessage();
        console.error(e);
      });
  }

  function getAll() {
    return pokemonList;
  }
  // return all items
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  //add a single item to the pokemonLst

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }
  // shows details about the object

  function addListItem(pokemon) {
    let pokelist = document.querySelector(".pokelist");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    listItem.appendChild(button);
    pokelist.appendChild(listItem);
    //button list
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
    // event listener and handler
  }
  //add button to each item in list

  return {
    add: add,
    getAll: getAll,
    LoadList: LoadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails,
    showLoadingMessage: showLoadingMessage,
    hideLoadingMessage: hideLoadingMessage,
  };
})();

pokemonRepository.LoadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});


