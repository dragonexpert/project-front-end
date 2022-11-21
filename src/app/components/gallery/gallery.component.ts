import { Component, OnInit } from '@angular/core';
import {Gallery} from "../../models/gallery";
import {GalleryBonus} from "../../models/gallery-bonus";
import {GalleryService} from "../../services/gallery.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService, private route: ActivatedRoute) { }

  allgalleries!: Gallery[];
  allBonuses!: GalleryBonus[];
  activePage: string = 'gallery';
  totalBonuses!: GalleryBonus;

  ngOnInit(): void {
    this.getGalleries();
    this.getGalleryBonuses();
    let page = this.route.snapshot.paramMap.get('bonus');
    if(page)
    {
      this.activePage = page;
    }
  }


  getGalleries() {
    this.galleryService.getGalleries().subscribe(
      (response) => this.allgalleries = response,
      (error) => console.error(error),
      () => console.log("Getting galleries")
    );
  }

  getGalleryBonuses() {
    this.galleryService.getGalleryBonuses(0).subscribe(
      (response) => {
        this.allBonuses = response;
        this.totalBonuses = this.calculateBonuses(response);
      },
      (error) => console.error(error),
      () => console.log("Fetching bonuses")
    );
  }


  ShowGallery() {
    this.activePage = 'gallery';
  }

  ShowGalleryBonuses() {
    this.activePage = 'bonus';
  }

  calculateBonuses(response: GalleryBonus[]) {
    let hpPercent;
    let atk;
    let atkPercent;
    let def;
    let defPercent;
    let points;
    let hp = hpPercent = atk = atkPercent = def = defPercent = points = 0;
    for(let x = 0; x < response.length; x++)
    {
      hp += response[x].hp;
      hpPercent += response[x].hpPercent;
      atk += response[x].atk;
      atkPercent += response[x].atkPercent;
      def += response[x].def;
      defPercent += response[x].defPercent;
      points = response[x].points;
    }
    let totalBonuses = new GalleryBonus(points, hp, hpPercent, atk, atkPercent, def, defPercent, '', 'Totals');
    return totalBonuses;
  }
}
