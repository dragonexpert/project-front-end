import { Component, OnInit } from '@angular/core';
import {Ranking} from "../../models/ranking";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  allRankings!: Ranking[];
  page!: number;

  ngOnInit(): void {
    this.page = 1;
    this.loadRankings(this.page);
  }

  loadRankings(page: number) {
    this.accountService.getRankings(page).subscribe(
      (response) => this.allRankings = response,
      (error) => console.error(error),
      () => console.log("Rankings data loaded")
    );
  }

}
