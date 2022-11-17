import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Account} from "../models/account";
import {Ranking} from "../models/ranking";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  baseUrl: string = `${environment.baseUrl}/account`;

  getMyAccounts() {
    return this.http.get<Account[]>(`${this.baseUrl}/me/${this.authService.userId}`, { headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getRankings(page: number) {
    return this.http.get<Ranking[]>(`${this.baseUrl}/ranking?page=${page}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  // Pass an object to it
  updateAccount(account: any) {
    const payload = JSON.stringify(account);
    return this.http.put<any>(`${this.baseUrl}/update`, payload, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
}
