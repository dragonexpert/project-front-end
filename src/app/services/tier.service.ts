import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class TierService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.baseUrl}/tier`;

  getTierList() {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getPokemonByTierId(id: number) {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
