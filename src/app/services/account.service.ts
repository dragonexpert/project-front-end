import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Account} from "../models/account";
import {Ranking} from "../models/ranking";
import {Profile} from "../models/profile";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  baseUrl: string = `${environment.baseUrl}/account`;

  testUrl: string = `http://localhost:8080/account`;

  getMyAccounts() {
    return this.http.get<Account[]>(`${this.baseUrl}/me/${this.authService.userId}`, { headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getAccountById(id: number) {
    return this.http.get<Account>(`${this.baseUrl}/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getRankings(page: number) {
    return this.http.get<Ranking[]>(`${this.baseUrl}/ranking?page=${page}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getRankingsBySpeed(page: number) {
    return this.http.get<Ranking[]>(`${this.baseUrl}/ranking?page=${page}&order_by=speed`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
  getRankingsByVip(page: number) {
    return this.http.get<Ranking[]>(`${this.baseUrl}/ranking?page=${page}&order_by=vip`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
  getRankingsByName(page: number) {
    return this.http.get<Ranking[]>(`${this.baseUrl}/ranking?page=${page}&order_by=name`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getRankingsByServer(page: number) {
    return this.http.get<Ranking[]>(`${this.baseUrl}/ranking?page=${page}&order_by=server`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  // Pass an object to it
  updateAccount(account: any) {
    const payload = JSON.stringify(account);
    return this.http.put<Account>(`${this.baseUrl}/update`, payload, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }

  getProfileByAccountName(username: string) {
    return this.http.get<Profile>(`${this.baseUrl}/user?username=${username}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  addAccount(accountName: any, accountServer: any, accountVip: any, cr: any, speed: any) {
    const payload = {"user_id": this.authService.userId, "name": accountName, "server": accountServer, "vip": accountVip, "cr": cr, "speed": speed};
    return this.http.put<Account>(`${this.baseUrl}/create`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  deleteAccountById(id: number) {
    return this.http.delete<any>(`${this.baseUrl}/delete/${id}?user_id=${this.authService.userId}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
