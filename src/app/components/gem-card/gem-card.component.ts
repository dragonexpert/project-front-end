import {Component, Input, OnInit} from '@angular/core';
import {Gem} from "../../models/gem";

@Component({
  selector: 'tr[app-gem-card]',
  templateUrl: './gem-card.component.html',
  styleUrls: ['./gem-card.component.css']
})
export class GemCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.exclusive = false;
    this.getGemName();
  }

  @Input() gem!: Gem;
  gemName!: string;
  exclusive!: boolean;

  getGemName() {
    switch(this.gem.trait)
    {
      case "skill":
      case "kill":
      case "rage":
      case "speed":
        this.gemName =  this.gem.bonus + " Gem " + this.gem.trait;
        this.exclusive = false;
        break;
      default:
        this.gemName = this.gem.trait;
        this.exclusive = true;
        break;
    }
  }
}
