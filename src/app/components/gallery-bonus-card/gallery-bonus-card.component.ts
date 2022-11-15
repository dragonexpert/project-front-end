import {Component, Input, OnInit} from '@angular/core';
import {GalleryBonus} from "../../models/gallery-bonus";

@Component({
  selector: 'tr[app-gallery-bonus-card]',
  templateUrl: './gallery-bonus-card.component.html',
  styleUrls: ['./gallery-bonus-card.component.css']
})
export class GalleryBonusCardComponent implements OnInit {

  constructor() { }

  @Input() bonus!: GalleryBonus;

  ngOnInit(): void {
  }

}
