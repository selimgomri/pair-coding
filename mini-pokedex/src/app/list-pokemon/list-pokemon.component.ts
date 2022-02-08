import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent{
  pokemons: any[] = [];
  constructor(private apiService: ApiService) {

  }



  async viewListPokemon(){
    this.pokemons = await this.apiService.fetchKantoPokemon();
    console.log(this.pokemons);
  }

  listPokemon() {
    this.apiService.fetchKantoPokemon2();
  }

}
