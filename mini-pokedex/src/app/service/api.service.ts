import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of} from 'rxjs';
import { Pokemon } from '../models/pokemon';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  nextPokemonsUrl: string | undefined
  pokemons: [] = [];
  constructor(private httpClient: HttpClient) {}

  getPokemonData(pokemon: Pokemon) {
    return this.httpClient.get(pokemon.url)
    .pipe(
      catchError((error: any) => {
        console.error(error);
        return of({});
      })
    );
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .pipe(
        catchError((error: any) => {
          console.error(error);
          return of([]);
        }),
        tap((response: any) => (this.nextPokemonsUrl = response.next)),
        map((response: any) => response.results)
      );
  }
  /*fetchKantoPokemon(): Promise<any> {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((allpokemon) => {
        return allpokemon.results;
      });
  }

  fetchPokemonData(pokemon: any) {
    let url = pokemon.url; // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        console.log(pokeData);
      });
  }*/
}
