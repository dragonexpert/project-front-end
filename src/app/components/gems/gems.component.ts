import { Component, OnInit } from '@angular/core';
import {Gem} from "../../models/gem";
import {GemService} from "../../services/gem.service";

@Component({
  selector: 'app-gems',
  templateUrl: './gems.component.html',
  styleUrls: ['./gems.component.css']
})
export class GemsComponent implements OnInit {

  constructor(private gemService: GemService) { }

  page!: string;
  normalGems!: Gem[];
  exclusiveGems!: Gem[];

  ngOnInit(): void {
    this.page = 'normalGems';
    this.getNormalGems();
    this.getExclusiveGems()
  }

  changePage(page: string) {
    this.page = page;
  }

  getNormalGems() {
    this.gemService.getStandardGems().subscribe(
      (response) => this.normalGems = response,
      (error) => console.error(error),
      () => "Normal gems loaded"
    );
  }

  getExclusiveGems() {
    this.gemService.getExclusiveGems().subscribe(
      (response) => this.exclusiveGems = response,
      (error) => console.error(error),
      () => "Exclusive gems loaded"
    );
  }
}
