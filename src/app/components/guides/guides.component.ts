import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  activeGuide!: string;

  private fragment!: string | null;

  ngOnInit(): void {
    this.activeGuide = 'growth';
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      // @ts-ignore
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  changeActiveGuide(guide: string) {
    this.activeGuide = guide;
  }
}
