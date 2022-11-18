import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../../models/account";
import {AccountService} from "../../services/account.service";
import {ActivatedRoute} from "@angular/router";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  updateForm = new UntypedFormGroup({
    accountName: new UntypedFormControl(),
    accountServer: new UntypedFormControl(''),
    accountVip: new UntypedFormControl(''),
    cr: new UntypedFormControl(''),
    speed: new UntypedFormControl('')
  });

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  accountInfo!: Account;
  error: boolean = false;
  updated: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getAccountById(params['id']));
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
    let account = this.accountInfo;
    account.accountName = this.updateForm.get('accountName')?.value;
    account.accountServer = this.updateForm.get('accountServer')?.value;
    account.accountVip = this.updateForm.get('accountVip')?.value;
    account.cr = this.updateForm.get('cr')?.value;
    account.speed = this.updateForm.get('speed')?.value;
    this.accountService.updateAccount(account).subscribe(
      (response) => this.accountInfo = response,
      (error) => console.error(error),
      () => this.updated = true
    );
    this.updated = true;
  }

  resetForm() {
    this.updateForm.get('accountName')?.setValue(this.accountInfo.accountName);
    this.updateForm.get('accountServer')?.setValue(this.accountInfo.accountServer);
    this.updateForm.get('accountVip')?.setValue(this.accountInfo.accountVip);
    this.updateForm.get('cr')?.setValue(this.accountInfo.cr);
    this.updateForm.get('speed')?.setValue(this.accountInfo.speed);
  }

  getAccountById(id: number) {
    this.accountService.getAccountById(id).subscribe(
      (response) => {
        this.accountInfo = response;
        this.updateForm.get('accountName')?.setValue(response.accountName);
        this.updateForm.get('accountServer')?.setValue(response.accountServer);
        this.updateForm.get('accountVip')?.setValue(response.accountVip);
        this.updateForm.get('cr')?.setValue(response.cr);
        this.updateForm.get('speed')?.setValue(response.speed);
      },
      (error) => console.error(error),
      () => console.log("Gathering account data")
    );
  }
}
