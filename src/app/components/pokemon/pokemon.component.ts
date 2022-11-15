import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  allPokemon!: Pokemon[];

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      (response) => this.allPokemon = response,
      (error) => console.error(error),
      () => console.log("Getting all Pokemon")
    );
  }

}
