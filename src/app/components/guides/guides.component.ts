import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {GuideName} from "../../models/guide-name";
import {GuideService} from "../../services/guide.service";

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private guideService: GuideService) { }

  activeGuide!: string;
  guideNames!: GuideName[];

  private fragment!: string | null;

  ngOnInit(): void {
    this.activeGuide = 'growth';
    let guide = this.route.snapshot.paramMap.get('tab');
    if(guide)
    {
      this.activeGuide = guide;
    }
    this.getGuideNames();
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      // @ts-ignore
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }

  getGuideNames() {
    this.guideService.getGuides().subscribe(
      (response) => this.guideNames = response,
      (error) => console.error(error),
      () => console.log("Getting guide names")
    );
  }

  changeActiveGuide(guide: string) {
    this.activeGuide = guide;
  }
}
