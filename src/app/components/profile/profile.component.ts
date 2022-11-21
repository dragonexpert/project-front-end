import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {ActivatedRoute} from "@angular/router";
import {Profile} from "../../models/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private accountService: AccountService,private route: ActivatedRoute) { }

  userProfile!: Profile;
  teamMembers!: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.loadProfile(params['name']));
  }

  loadProfile(username: string) {
    this.accountService.getProfileByAccountName(username).subscribe(
      (response) => {
        this.userProfile = response;
        this.teamMembers = response.team.split(",");
      },
      (error) => console.error(error),
      () => console.log("Loading profile")
    );
  }

}
