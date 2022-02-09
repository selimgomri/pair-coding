import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;

  constructor() {
    console.log(this.pokemon);
  }

  ngOnInit(): void {
    console.log(this.pokemon);
  }
}
