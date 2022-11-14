import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Account} from "../models/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  baseUrl: string = `${environment.baseUrl}/account`;

  getMyAccounts() {
    return this.http.get<Account[]>(`${this.baseUrl}/me/${this.authService.userId}`, { headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
