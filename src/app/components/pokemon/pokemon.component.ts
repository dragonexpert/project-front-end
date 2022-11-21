import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {TierService} from "../../services/tier.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private tierService: TierService, private route: ActivatedRoute) { }

  allPokemon!: Pokemon[];
  badge!: string | null;
  gem!: string | null;
  spirit!: string | null;
  tier!: string | null;
  type!: string | null;

  ngOnInit(): void {
    this.badge = this.route.snapshot.paramMap.get('badge');
    this.gem = this.route.snapshot.paramMap.get('gem');
    this.spirit = this.route.snapshot.paramMap.get('spirit');
    this.tier = this.route.snapshot.paramMap.get('tier');
    this.type = this.route.snapshot.paramMap.get('type');
    if(this.badge)
    {
      this.getAllPokemonByBadge(this.badge);
    }
    else if(this.gem)
    {
      this.getAllPokemonByGem(this.gem);
    }
    else if(this.spirit)
    {
      this.getAllPokemonBySpirit(Number(this.spirit));
    }
    else if(this.tier)
    {
      this.getAllPokemonByTier(Number(this.tier));
    }
    else if(this.type)
    {
      this.getAllPokemonByType(this.type);
    }
    else
    {
      this.getAllPokemon();
    }
  }

  getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      (response) => this.allPokemon = response,
      (error) => console.error(error),
      () => console.log("Getting all Pokemon")
    );
  }

  getAllPokemonByBadge(badge: string) {
    this.pokemonService.getPokemonByBadge(badge).subscribe(
      (response) => this.allPokemon = response,
      (error) => console.error(error),
      () => console.log("Getting Pokemon by badge")
    );
  }

  getAllPokemonByGem(gem: string) {
    this.pokemonService.getPokemonByGem(gem).subscribe(
      (response) => this.allPokemon = response,
      (error) => console.error(error),
      () => console.log("Getting Pokemon by gem")
    );
  }

  getAllPokemonBySpirit(spirit: number) {
    this.pokemonService.getPokemonBySpiritId(spirit).subscribe(
      (response) => this.allPokemon = response,
      (error) => console.error(error),
      () => console.log("Getting Pokemon by spirit")
    );
  }

  getAllPokemonByTier(tier: number) {
      this.tierService.getPokemonByTierId(tier).subscribe(
        (response) => this.allPokemon = response,
        (error) => console.error(error),
        () => console.log("Getting Pokemon by tier")
      );
  }

  getAllPokemonByType(type: string) {
    this.pokemonService.getPokemonByType(type).subscribe(
      (response) => this.allPokemon = response,
      (error) => console.error(error),
      () => console.log("Getting Pokemon by type")
    );
  }
}
