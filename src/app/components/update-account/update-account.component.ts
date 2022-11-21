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
    speed: new UntypedFormControl(''),
    avatar: new UntypedFormControl(''),
    usertitle: new UntypedFormControl(''),
    signature: new UntypedFormControl(''),
    team: new UntypedFormControl('')
  });

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  accountInfo!: Account;
  error: boolean = false;
  updated: boolean = false;
  avatarError: boolean = false;

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccountById(id);
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
    let avatar = this.updateForm.get('avatar')?.value;
    if(avatar)
    {
      if(!this.validateAvatar(avatar))
      {
        return;
      }
    }
    let team = this.updateForm.get('team')?.value;
    if(team)
    {
      team = team.replace(' ', '-');
      team = team.replace(' ', '');
    }
    let account = this.accountInfo;
    account.accountName = this.updateForm.get('accountName')?.value;
    account.accountServer = this.updateForm.get('accountServer')?.value;
    account.accountVip = this.updateForm.get('accountVip')?.value;
    account.cr = this.updateForm.get('cr')?.value;
    account.speed = this.updateForm.get('speed')?.value;
    account.avatar = avatar;
    account.usertitle = this.updateForm.get('usertitle')?.value;
    account.signature = this.updateForm.get('signature')?.value;
    account.team = team;
    this.accountService.updateAccount(account).subscribe(
      (response) => this.accountInfo = response,
      (error) => console.error(error),
      () => this.updated = true
    );
    this.updated = true;
  }

  validateAvatar(avatar: string): boolean
  {
    if(avatar.startsWith('https'))
    {
      this.avatarError = false;
      return true;
    }
    this.avatarError = true;
    return false;
  }

  resetForm() {
    this.updateForm.get('accountName')?.setValue(this.accountInfo.accountName);
    this.updateForm.get('accountServer')?.setValue(this.accountInfo.accountServer);
    this.updateForm.get('accountVip')?.setValue(this.accountInfo.accountVip);
    this.updateForm.get('cr')?.setValue(this.accountInfo.cr);
    this.updateForm.get('speed')?.setValue(this.accountInfo.speed);
    this.updateForm.get('avatar')?.setValue(this.accountInfo.avatar);
    this.updateForm.get('usertitle')?.setValue(this.accountInfo.usertitle);
    this.updateForm.get('signature')?.setValue(this.accountInfo.signature);
    this.updateForm.get('team')?.setValue(this.accountInfo.team);
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
        this.updateForm.get('avatar')?.setValue(response.avatar);
        this.updateForm.get('usertitle')?.setValue(response.usertitle);
        this.updateForm.get('signature')?.setValue(response.signature);
        this.updateForm.get('team')?.setValue(response.team);
      },
      (error) => console.error(error),
      () => console.log("Gathering account data")
    );
  }
}
