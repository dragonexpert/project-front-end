import {Component, Input, OnInit} from '@angular/core';
import {Ranking} from "../../models/ranking";

@Component({
  selector: 'tr[app-ranking-card]',
  templateUrl: './ranking-card.component.html',
  styleUrls: ['./ranking-card.component.css']
})
export class RankingCardComponent implements OnInit {

  constructor() { }

  @Input() ranking!: Ranking;
  @Input() page!: number;
  @Input() rank!: number;

  ngOnInit(): void {
    this.rank += 1;
  }

}
