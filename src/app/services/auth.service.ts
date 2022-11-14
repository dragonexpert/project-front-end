import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  userId: number = 0;
  admin: boolean = false;
  baseUrl: string = `${environment.baseUrl}/user`;
  username: string = "";

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const payload = {"username": username, "password": password};
    return this.http.post<any>(`${this.baseUrl}/login`, payload, { headers: environment.headers, withCredentials: environment.withCredentials});
  }

  logout() {
    this.loggedIn = false;
    this.admin = false;
    this.username = "";
    this.userId = 0;
  }

  changePassword(username: string, currentPassword: string, newPassword: string, confirmPassword: string) {
    const payload = {"old_password": currentPassword, "new_password": newPassword, "new_password2": confirmPassword, "username": username};
    return this.http.post<any>(`${this.baseUrl}/changePassword`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  register(username: string, password: string, email: string) {
    const payload = {"username": username, "password": password, "email": email};
    return this.http.post<any>(`${this.baseUrl}/register`, payload, { headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
