import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  username!: string;

  ngOnInit(): void {
    this.username = this.authService.username;
  }

  isLoggedIn(): boolean {
    return this.authService.userId > 0;
  }

  isAdmin(): boolean {
    return this.authService.admin;
  }

}
