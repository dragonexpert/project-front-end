import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Faq} from "../models/faq";

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  baseUrl: string = `${environment.baseUrl}/faq/`;

  getFaqs() {
    return this.http.get<Faq[]>(`${this.baseUrl}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
