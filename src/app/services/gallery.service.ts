import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Gallery} from "../models/gallery";
import {GalleryBonus} from "../models/gallery-bonus";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.baseUrl}/gallery`;

  getGalleries() {
    return this.http.get<Gallery[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  getGalleryBonuses(points: number = 0) {
    return this.http.get<GalleryBonus[]>(`${this.baseUrl}/bonus?points=${points}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
