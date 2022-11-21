import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {GuideName} from "../models/guide-name";

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `${environment.baseUrl}/guides`;

  getGuides() {
    return this.http.get<GuideName[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
