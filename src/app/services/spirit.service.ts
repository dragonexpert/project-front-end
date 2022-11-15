import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Spirit} from "../models/spirit";

@Injectable({
  providedIn: 'root'
})
export class SpiritService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = `${environment.baseUrl}/spirit`;

  getAllSpirits() {
    return this.http.get<Spirit[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getSpiritById(id: number) {
    return this.http.get<Spirit>(`${this.baseUrl}/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
