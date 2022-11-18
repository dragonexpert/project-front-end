import { Component, OnInit } from '@angular/core';
import {Donation} from "../../models/donation";
import {DonationService} from "../../services/donation.service";

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor(private donationService: DonationService) { }

  allDonations!: Donation[];

  ngOnInit(): void {
    this.getDonations();
  }

  getDonations() {
    this.donationService.getDonations().subscribe(
      (response) => this.allDonations = response,
      (error) => console.error(error),
      () => console.log("Fetching donations")
    );
  }
}
