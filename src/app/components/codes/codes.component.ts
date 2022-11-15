import { Component, OnInit } from '@angular/core';
import {Code} from "../../models/code";
import {CodeService} from "../../services/code.service";

@Component({
  selector: 'app-codes',
  templateUrl: './codes.component.html',
  styleUrls: ['./codes.component.css']
})
export class CodesComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  allCodes!: Code[];

  ngOnInit(): void {
    this.retrieveAllCodes();
  }

  retrieveAllCodes(): void {
    this.codeService.getCodes().subscribe(
      (response) => this.allCodes = response,
      (error) => console.error("Error fetching codes: " + error),
      () => console.log("Codes retrieved.")
    );
  }

}
