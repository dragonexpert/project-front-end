import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Need to create an endpoint in the Java application for fetching donors if I want this to update automatically.
}
