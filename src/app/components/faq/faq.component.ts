import { Component, OnInit } from '@angular/core';
import {FaqService} from "../../services/faq.service";
import {Faq} from "../../models/faq";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private faqService: FaqService) { }

  allFaqs!: any;

  ngOnInit(): void {
    this.loadFaqs();
  }

  loadFaqs(): void {
    this.faqService.getFaqs().subscribe(
      (response) => {
        this.allFaqs = response;
      },
          (error) => console.error(error),
        () => console.log("Loading faqs complete.")
    );
  }

}
