import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Pokemon} from "../models/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.baseUrl}/pokemon`;

  getAllPokemon() {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getPokemonById(id: number) {
    return this.http.get<Pokemon>(`${this.baseUrl}/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getPokemonByName(name: string) {
    return this.http.get<Pokemon>(`${this.baseUrl}/name/${name}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getPokemonBySpiritId(id: number) {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/spirit/${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getPokemonByBadge(badge: string) {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/badge/${badge}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getPokemonByGem(gem: string) {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/gem/${gem}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getPokemonByType(type: string) {
    return this.http.get<Pokemon[]>(`${this.baseUrl}/type/${type}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
