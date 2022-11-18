import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  private baseUrl: string = environment.baseUrl + "/admin";

  private adminHeaders = new HttpHeaders({'content-type': 'application/json',
  'cache-control': 'no-cache',
  'access-control-allow-origin': 'https://fantasyelves.com',
  'authorization': 'Bearer:' + this.authService.admin_token});

  addEvent(event_name: string, event_date: string, pokemon: string) {
    const payload = {"event_name": event_name, "event_date": event_date, "pokemon": pokemon};
    return this.http.put<any>(`${this.baseUrl}/events/add?user_id=${this.authService.userId}`, payload,
      {headers: this.adminHeaders, withCredentials: environment.withCredentials});
  }

  updateEvent(event_name: string, event_date: string, pokemon: string, id: number) {
  const payload = {"event_name": event_name, "event_date": event_date, "pokemon": pokemon};
    return this.http.put<any>(`${this.baseUrl}/events/update/${id}?user_id=${this.authService.userId}`, payload,
      {headers: this.adminHeaders, withCredentials: environment.withCredentials});
  }

  deleteEvent(eventId: number) {
    return this.http.delete(`${this.baseUrl}/events/delete/${eventId}?user_id=${this.authService.userId}`,
      {headers: this.adminHeaders, withCredentials: environment.withCredentials});
  }
}
