import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../services/pokemon.service";
import {Pokemon} from "../../models/pokemon";
import {GemService} from "../../services/gem.service";
import {Gem} from "../../models/gem";

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.css']
})
export class SinglePokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private gemService: GemService) { }

  pokemon!: Pokemon;
  gem!: Gem;
  gemName!: string;


  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get('id'));
    this.getPokemonById(id);
  }

  getPokemonById(id: string) {
    this.pokemonService.getPokemonByName(id).subscribe(
      (response) => {
        this.pokemon = response;
        if(response.custom_gem_id)
        {
          this.getGemById(response.custom_gem_id);
        }
      },
          (error) => console.error(error),
      () => console.log("Fetching Pokemon")
    )
  }

  getGemById(id: number) {
    this.gemService.getGemById(id).subscribe(
      (response) => {
        this.gem = response;
        this.gemName = response.trait;
      },
          (error) => console.error(error)
      ,
      () => console.log("Getting gem data")
    );
  }
}
