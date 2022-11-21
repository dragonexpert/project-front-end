import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CurrentEvent } from "../models/current-event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = `${environment.baseUrl}/events`;
  private testUrl: string = `http://localhost:8080/events`;

  getCurrentEvents() {
    return this.http.get<CurrentEvent[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getEventTypes() {
    return this.http.get<any>(`${this.baseUrl}/types`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getSingleEventType(eventType: string) {
    return this.http.get<any>(`${this.baseUrl}/name/${eventType}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  addEvent(event_name: string, event_date: string, pokemon: string) {
    const payload = {"event_name": event_name, "event_date": event_date, "pokemon": pokemon};
    return this.http.put<any>(`${this.testUrl}/add`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
