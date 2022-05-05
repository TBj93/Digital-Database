let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "Mewtwo",
      height: 2,
      types: ["Psychic"],
    },
    {
      name: "Aerodactyl",
      height: 1.8,
      types: ["Rock", "Flying"],
    },

    {
      name: "Gyarados",
      height: 6.1,
      types: ["Water", "Flying"],
    },
  ];

  function getAll() {
    return pokemonList;
  }
  // return all items
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  //add a single item to the pokemonLst

  function showDetails(pokemon) {
    console.log(pokemon);
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
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  // writes every pokemon in the list
  pokemonRepository.addListItem(pokemon);
  // adds button
});
