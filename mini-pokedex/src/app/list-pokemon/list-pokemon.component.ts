import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  fetchKantoPokemon() {
    this.apiService.fetchKantoPokemon();
  }
}
