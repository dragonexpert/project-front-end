import {Component, Input, OnInit} from '@angular/core';
import {Spirit} from "../../models/spirit";
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'tr[app-spirit-card]',
  templateUrl: './spirit-card.component.html',
  styleUrls: ['./spirit-card.component.css']
})
export class SpiritCardComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  @Input() spirit!: Spirit;

  spiritPokemon!: Pokemon[];
  showPokemon!: boolean;

  ngOnInit(): void {
    this.showPokemon = false;
  }

  getSpiritPokemon() {
    this.showPokemon = true;
    this.pokemonService.getPokemonBySpiritId(this.spirit.spirit_id).subscribe(
      (response) => this.spiritPokemon = response,
      (error) => console.error(error),
      () => console.log("Fetching Pokemon for spirit id: " + this.spirit.spirit_id)
    );
  }

}
