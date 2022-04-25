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
 function add(pokemon)  {
    PokemonList.push(pokemon);
}
//add a single item to the pokemonLst
return {
    add: add,
    getAll: getAll
};    
    
})();

//  document.write(pokemonRepository.getAll());



pokemonRepository.getAll().forEach(function(pokemon){
 // writes every pokemon in the list + height 

         if(pokemon.height > 4 ){
            document.write(pokemon.name+'__height:'+pokemon.height+'--> Huge!'+'<br>  </br>');
        }
        
        else{
        document.write(pokemon.name+'__height:'+pokemon.height+'<br>  </br>');
    }           

                    });
