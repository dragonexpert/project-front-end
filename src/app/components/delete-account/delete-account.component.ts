import { Component, OnInit } from '@angular/core';
import {Account} from "../../models/account";
import {AccountService} from "../../services/account.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) { }

  accountInfo!: Account;

  ngOnInit() {
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getAccountById(id);
  }

  getAccountById(id: number) {
    this.accountService.getAccountById(id).subscribe(
      (response) => {
        console.log(response);
        this.accountInfo = response;
      },
      (error) => console.error(error),
      () => console.log("Fetching account data")
    );
  }

  deleteAccountById(id: number) {
    this.accountService.deleteAccountById(id).subscribe(
      () => console.log("Deleting account"),
      (error) => console.error(error),
      () => this.router.navigate(['/account'])
    );
  }

  goBack() {
    this.router.navigate(['/account']);
  }

}
