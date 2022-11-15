import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DiscordMessage} from "../models/discord-message";

@Injectable({
  providedIn: 'root'
})
export class DiscordService {

  constructor(private http: HttpClient) { }
  private mainChannelId: string = "891029823600861226";
  private baseUrl: string = `${environment.baseUrl}/discord`;

  getMessageInMainChannel() {
    return this.http.get<DiscordMessage[]>(`${this.baseUrl}/messages?id=${this.mainChannelId}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getMessagesByChannelId(id: number) {
    return this.http.get<DiscordMessage[]>(`${this.baseUrl}/messages?id=${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
