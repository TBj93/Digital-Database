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


pokemonList.forEach(function(pokemon){
 // writes every pokemon in the list + height 

         if(pokemon.height > 4 ){
            document.write(pokemon.name+'__height:'+pokemon.height+'--> Huge!'+'<br>  </br>');
        }
        
        else{
        document.write(pokemon.name+'__height:'+pokemon.height+'<br>  </br>');
    }           

                    });
/*


for (let i = 0; i <= pokemonList.length; i++)
    // writes every pokemon in the list + height    
    {
        if(pokemonList[i].height > 4 ){
            document.write(pokemonList[i].name+'__height:'+pokemonList[i].height+'--> Huge!'+'<br>  </br>');
        }
        
        else{
        document.write(pokemonList[i].name+'__height:'+pokemonList[i].height+'<br>  </br>');
    }
    
    }
*/