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
  

 



  function showModal(pkm) {
 let modalBody =$(".modal-body");
 let modalTitle = $('.modal-title');

 modalTitle.empty();
 let pName = $("<h1>" + pkm.name + "</h1>");
 modalTitle.append(pName);
 
 let pImage = $('<img class="modal-img" style=width:50%">');
 pImage.attr("src", pkm.imageUrlFront);
 let pBimage =$('<img class="modal-img" style=width:50%">');
 pBimage.attr("src", pkm.imageUrlBack);
modalBody.empty();
 

let pHeight = $('<p>'+"Height:     "+pkm.height + '</p>');
let pWeight = $('<p>'+"Weight:     "+pkm.weight + '</p>');

modalBody.append(pImage);
modalBody.append(pBimage);
modalBody.append(pHeight);
modalBody.append(pWeight);
$('#exampleModal').modal('show');
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
        pokemon.imageUrlFront = details.sprites.front_default;
        pokemon.imageUrlBack = details.sprites.back_default;
        pokemon.height = details.height;
        pokemon.types = details.types;
        pokemon.weight= details.weight;
      
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
    button.classList.add("btn");
    button.classList.add("btn-dark");
    button.classList.add("btn-block");
    button.classList.add("btn-outline-primary");
    button.setAttribute('data-toggle', 'modal');
    //add bootstrap buttons and toggle modal
    //button.setAttribute('data-target', '#exampleModal');
    listItem.classList.add("group-list-item");
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
    showModal: showModal,
  };
})();

pokemonRepository.LoadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
