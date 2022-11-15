import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {TierService} from "../../services/tier.service";

@Component({
  selector: 'app-tier',
  templateUrl: './tier.component.html',
  styleUrls: ['./tier.component.css']
})
export class TierComponent implements OnInit {

  constructor(private tierService: TierService) { }

  allPokemon!: Pokemon[];

  ngOnInit(): void {
    this.generateTierList();
  }

  generateTierList() {
    this.tierService.getTierList().subscribe(
      (response) => this.allPokemon = response,
      (error) => console.error(error),
      () => console.log("Fetching tier list")
    );
  }

}
