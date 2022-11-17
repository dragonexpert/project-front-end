import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Donation} from "../models/donation";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `${environment.baseUrl}/donation`;

  getDonations() {
    return this.http.get<Donation[]>(`${this.baseUrl}/`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  addDonation(userId: number, date: string, amount: number) {
    const payload = {"userId": userId, "date": date, "amount": amount};
    return this.http.put<Donation>(`${this.baseUrl}/add`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  deleteDonationById(donationId: number) {
    return this.http.delete(`${this.baseUrl}/delete/${donationId}`, {headers: environment.headers, withCredentials: environment.withCredentials});
  }
}
