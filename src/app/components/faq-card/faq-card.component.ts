import {Component, Input, OnInit} from '@angular/core';
import {Faq} from "../../models/faq";

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.css']
})
export class FaqCardComponent implements OnInit {

  constructor() { }

  @Input() faq!: Faq;

  ngOnInit(): void {
  }

}
