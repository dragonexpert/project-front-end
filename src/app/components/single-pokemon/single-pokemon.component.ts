import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  pokemon!: Pokemon;

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getPokemonById(params['id']));
  }

  getPokemonById(id: string) {
    this.pokemonService.getPokemonByName(id).subscribe(
      (response) => this.pokemon = response,
      (error) => console.error(error),
      () => console.log("Fetching Pokemon")
    )
  }
}
