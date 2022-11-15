import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Gem} from "../models/gem";

@Injectable({
  providedIn: 'root'
})
export class GemService {

  private baseUrl: string = `${environment.baseUrl}/gem`;

  constructor(private http: HttpClient) { }

  getStandardGems() {
    return this.http.get<Gem[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getExclusiveGems() {
    return this.http.get<Gem[]>(`${this.baseUrl}/exclusive/view`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getGemById(id: number) {
    return this.http.get<Gem>(`${this.baseUrl}/view/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  addGem(trait: string, traitValue: string, color: string, attack: number, defense: number, hp: number, bonus: string, bonusValue: number, description: string) {
    const payload = {"trait": trait, "traitValue": traitValue, "color": color, "attack": attack, "defense": defense, "hp": hp, "bonus": bonus, "bonusValue": bonusValue, "description": description};
    return this.http.put<Gem>(`${this.baseUrl}/add`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
