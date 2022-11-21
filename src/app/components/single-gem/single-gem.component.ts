import { Component, OnInit } from '@angular/core';
import {GemService} from "../../services/gem.service";
import {Gem} from "../../models/gem";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-gem',
  templateUrl: './single-gem.component.html',
  styleUrls: ['./single-gem.component.css']
})
export class SingleGemComponent implements OnInit {

  constructor(private gemService: GemService, private route: ActivatedRoute) { }

  singleGem!: Gem;
  gemName!: string;
  exclusive!: boolean;

  ngOnInit(): void {
    this.exclusive = false;
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.getGemById(id);
  }


  getGemById(id: number) {
    this.gemService.getGemById(id).subscribe(
      (response) => {
          this.singleGem = response;
          this.getGemName(this.singleGem);
      },
          (error) => console.error(error),
      () => console.log("Captured gem.")
    );
  }

  getGemName(gem: Gem) {
    switch(gem.trait)
    {
      case "skill":
      case "kill":
      case "rage":
      case "speed":
        this.gemName =  gem.bonus + " Gem " + gem.trait;
        this.exclusive = false;
        break;
      default:
        this.gemName = gem.trait;
        this.exclusive = true;
        break;
    }
  }


}
