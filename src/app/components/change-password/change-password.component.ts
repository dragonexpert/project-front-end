import { Component, OnInit } from '@angular/core';
import {UntypedFormGroup, UntypedFormControl} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  error: string = "";

  constructor(private authService: AuthService, private router: Router, private location: Location) { }

  changePasswordForm = new UntypedFormGroup({
    currentPassword: new UntypedFormControl(''),
    newPassword: new UntypedFormControl(''),
    confirmPassword: new UntypedFormControl('')
    }
  );

  ngOnInit(): void {
  }

  changePassword(): void {
    let currentPassword = this.changePasswordForm.get('currentPassword')?.value;
    let newPassword = this.changePasswordForm.get('newPassword')?.value;
    let confirmPassword = this.changePasswordForm.get('confirmPassword')?.value;
    if(newPassword != confirmPassword)
    {
      this.error = "The new passwords do not match.";
      return;
    }
    try {
      this.authService.changePassword(this.authService.username, currentPassword, newPassword, confirmPassword).subscribe(
        (response) =>  console.log(response),
        (error) => console.error(error),
          () => this.router.navigate(['/account'])
      )
    }
    catch (exception)
    {
      console.log("Exception in changing password: " + exception);
    }
  }

  goBack() {
    this.location.back();
  }
}
