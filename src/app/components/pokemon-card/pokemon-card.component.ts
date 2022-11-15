import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'tr[app-pokemon-card]',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  constructor() { }

  @Input() pokemon!: Pokemon;

  ngOnInit(): void {
    if(isNaN(this.pokemon.spirit_id)) {
      this.pokemon.spirit_id = this.pokemon.spiritId;
    }

    if(isNaN(this.pokemon.pokemon_id)) {
      this.pokemon.pokemon_id = this.pokemon.pokemonId;
    }

    if(!this.pokemon.evolve_gem) {
      this.pokemon.evolve_gem = this.pokemon.evolveGem;
    }
  }

}
