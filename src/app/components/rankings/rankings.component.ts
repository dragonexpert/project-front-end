import { Component, OnInit } from '@angular/core';
import {Ranking} from "../../models/ranking";
import {AccountService} from "../../services/account.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  activePage: string = 'cr';
  allRankings!: Ranking[];
  page!: number;
  order!: string | null;

  ngOnInit(): void {
    let page = this.route.snapshot.paramMap.get('page');
    if(!page)
    {
      this.page = 1;
    }
    else
    {
      this.page = Number(page);
    }
    this.order = this.route.snapshot.paramMap.get('order');
    if(this.order)
    {
      switch(this.order)
      {
        case 'cr':
          this.loadRankings(this.page);
          break;
        case 'speed':
          this.loadRankingsBySpeed(this.page);
          break;
        case 'name':
          this.loadRankingsByName(this.page);
          break;
        case 'vip':
          this.loadRankingsByVip(this.page);
          break;
        default:
          this.loadRankings(this.page);
      }
    }
    else
    {
      this.loadRankings(this.page);
    }
  }

  loadRankings(page: number) {
    this.page = page;
    this.activePage = 'cr';
    this.accountService.getRankings(page).subscribe(
      (response) => this.allRankings = response,
      (error) => console.error(error),
      () => console.log("Rankings data loaded")
    );
  }

  prepareReload(page: number) {
    this.page = page;
    if(this.activePage == 'cr')
    {
      this.loadRankings(page);
    }
    if(this.activePage == 'speed')
    {
      this.loadRankingsBySpeed(page);
    }
    if(this.activePage == 'vip')
    {
      this.loadRankingsByVip(page);
    }
    if(this.activePage == 'name')
    {
      this.loadRankingsByName(page);
    }
    if(this.activePage == 'server')
    {
      this.loadRankingsByServer(page);
    }
  }

  loadRankingsBySpeed(page: number) {
    this.page = page;
    this.activePage = 'speed';
    this.accountService.getRankingsBySpeed(page).subscribe(
      (response) => this.allRankings = response,
      (error) => console.error(error),
      () => console.log("Rankings data loaded")
    );
  }

  loadRankingsByVip(page: number) {
    this.page = page;
    this.activePage = 'vip';
    this.accountService.getRankingsByVip(page).subscribe(
      (response) => this.allRankings = response,
      (error) => console.error(error),
      () => console.log("Rankings data loaded")
    );
  }

  loadRankingsByName(page: number) {
    this.page = page;
    this.activePage = 'name';
    this.accountService.getRankingsByName(page).subscribe(
      (response) => this.allRankings = response,
      (error) => console.error(error),
      () => console.log("Rankings data loaded")
    );
  }

  loadRankingsByServer(page: number) {
    this.page = page;
    this.activePage = 'server';
    this.accountService.getRankingsByServer(page).subscribe(
      (response) => this.allRankings = response,
      (error) => console.error(error),
      () => console.log("Rankings data loaded")
    );
  }
}
