import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Code} from "../models/code";

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.baseUrl}/code`;

  getCodes() {
    return this.http.get<Code[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  // Future feature
  addCode(code: string, diamonds: number, expires: string, vipRequired: number) {
    const payload = {"code": code, "diamonds": diamonds, "vipRequired": vipRequired, "expires": expires};
    return this.http.put<any>(`${this.baseUrl}/add`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  // Future feature
  deleteCode(id: number) {
    this.http.delete(`${this.baseUrl}/delete?id=${id}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
