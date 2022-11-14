import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }

  registerFailure!: boolean;
  user!: User;

  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
    email: new UntypedFormControl('')
  });


  ngOnInit(): void {
    this.registerFailure = false;
  }

  register(): void {
    this.authService.register(this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value,
      this.loginForm.get('email')?.value).subscribe(
      (response) => {
        this.authService.loggedIn = true;
        this.authService.userId = response.id;
        this.authService.admin = false;
        this.user = response;
      },
      () => this.registerFailure = true,
      () => this.router.navigate(['/account'])
    )

  } // End register

  goBack(): void {
    this.location.back();
  }
} // End export class
