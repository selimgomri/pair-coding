import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  pokemons: any[] = [];
  constructor() {}

  fetchKantoPokemon(): Promise<any>{
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((allpokemon) => {
       return allpokemon.results

      });

  }

  fetchPokemonData(pokemon: any) {
    let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        console.log(pokeData)
      });
  }

}
