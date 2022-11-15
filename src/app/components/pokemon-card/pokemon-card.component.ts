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
  }

}
