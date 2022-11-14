import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Account} from "../../models/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService, private authService: AuthService, private router: Router) { }

  allAccounts!: Account[];
  noAccounts: boolean = false;
  admin!: boolean;

  ngOnInit(): void {
    this.admin = this.authService.admin;
    this.getAllAccounts();
  }

  getAllAccounts(): void {
    this.accountService.getMyAccounts().subscribe(
      (response) => this.allAccounts = response,
      (error => this.noAccounts = true),
      () => console.log("Loaded all accounts")
    )
  }

}
