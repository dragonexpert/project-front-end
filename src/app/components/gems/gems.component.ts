import { Component, OnInit } from '@angular/core';
import {Gem} from "../../models/gem";
import {GemService} from "../../services/gem.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gems',
  templateUrl: './gems.component.html',
  styleUrls: ['./gems.component.css']
})
export class GemsComponent implements OnInit {

  constructor(private gemService: GemService, private route: ActivatedRoute) { }

  page!: string;
  normalGems!: Gem[];
  exclusiveGems!: Gem[];

  ngOnInit(): void {
    this.page = 'normalGems';
    let exclusive = this.route.snapshot.paramMap.get('exclusive');
    if(exclusive)
    {
      this.page = 'exclusiveGems';
    }
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
