import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {ActivatedRoute} from "@angular/router";
import {Account} from "../../models/account";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  updateForm = new UntypedFormGroup({
    accountName: new UntypedFormControl(),
    accountServer: new UntypedFormControl(''),
    accountVip: new UntypedFormControl(''),
    cr: new UntypedFormControl(''),
    speed: new UntypedFormControl('')
  });

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  error: boolean = false;
  updated: boolean = false;

  ngOnInit(): void {
  }

  updateAccount() {
    if(!this.updateForm.get('accountName')?.value || !this.updateForm.get('accountServer')?.value
      || !this.updateForm.get('cr')?.value || !this.updateForm.get('speed')?.value)
    {
      this.error = true;
      this.updated = false;
      return;
    }
    this.error = false;
    let accountName = this.updateForm.get('accountName')?.value;
    let accountServer = this.updateForm.get('accountServer')?.value;
    let accountVip = this.updateForm.get('accountVip')?.value;
    let cr = this.updateForm.get('cr')?.value;
    let speed = this.updateForm.get('speed')?.value;
    this.accountService.addAccount(accountName, accountServer, accountVip, cr, speed).subscribe(
      (response) => console.log(response),
      (error) => console.error(error),
      () => this.updated = true
    );
    this.updated = true;
  }
}
