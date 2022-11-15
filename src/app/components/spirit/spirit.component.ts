import { Component, OnInit } from '@angular/core';
import {SpiritService} from "../../services/spirit.service";
import {Spirit} from "../../models/spirit";

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.css']
})
export class SpiritComponent implements OnInit {

  constructor(private spiritService: SpiritService) { }

  allSpirits!: Spirit[];

  ngOnInit(): void {
    this.fetchSpirits();
  }

  fetchSpirits() {
    this.spiritService.getAllSpirits().subscribe(
      (response) => this.allSpirits = response,
      (error) => console.error(error),
      () => console.log("Getting spirit data")
    );
  }
}
