import { ApiService } from '../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon';
@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent{
  pokemons: Pokemon[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {
    this.fetchAllPokemons();
  }
  async fetchAllPokemons() {
    this.apiService
      .getPokemonList()
      .pipe(delay(1000))
      .subscribe((pokemons) => {
        this.isLoading = false;
        this.pokemons = pokemons;

        for (let i = 0; i < this.pokemons.length; i++) {
          this.apiService
            .getPokemonData(this.pokemons[i])
            .pipe(delay(1000))
            .subscribe((details: any) => {
              this.pokemons[i] = { ...this.pokemons[i], details };
              //console.log(details);
            });
        }
      });
  }
}
