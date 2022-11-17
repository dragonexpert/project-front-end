import { Component, OnInit } from '@angular/core';
import {FormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loginFailure!: boolean;
  registerFailure!: boolean;
  user!: User;

  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl(''),
    password: new UntypedFormControl(''),
    email: new UntypedFormControl('')
  });


  ngOnInit(): void {
    this.loginFailure = false;
    this.registerFailure = false;
  }

  login(): void {
    try {
      this.authService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value).subscribe(
        (response) => {
          this.loginFailure = false;
          this.registerFailure = false;
          this.authService.loggedIn = true;
          this.authService.userId = response.id;
          this.authService.username = response.username;
          this.authService.admin = response.admin;
          if(response.hasOwnProperty("admin_token"))
          {
            this.authService.admin_token = response.admin_token;
          }
          this.user = response;
        },
        () => this.loginFailure = true,
        () => this.router.navigate(['/account'])
      );
    }
    catch(error)
    {
      this.loginFailure = true;
    }
  } // End login

  register(): void {
    this.authService.register(this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value,
      this.loginForm.get('email')?.value).subscribe(
      (response) => {
        this.loginFailure = false;
        this.authService.loggedIn = true;
        this.authService.userId = response.id;
        this.authService.admin = false;
        this.user = response;
      },
      () => this.registerFailure = true,
      () => this.router.navigate(['/account'])
    )

  } // End register
} // End export class
