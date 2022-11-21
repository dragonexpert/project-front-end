import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {AdminService} from "../../services/admin.service";
import {CodeService} from "../../services/code.service";
import {Code} from "../../models/code";

@Component({
  selector: 'app-admin-code',
  templateUrl: './admin-code.component.html',
  styleUrls: ['./admin-code.component.css']
})
export class AdminCodeComponent implements OnInit {

  constructor(private adminService: AdminService, private codeService: CodeService) { }

  codeForm = new UntypedFormGroup({
    code: new UntypedFormControl(),
    vipRequired: new UntypedFormControl('0'),
    diamonds: new UntypedFormControl(''),
    expireDate: new UntypedFormControl('2099-12-31')
  });

  codeAdded: boolean = false;
  codeDeleted: boolean = false;
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

  addCode() {
    this.adminService.addCode(this.codeForm.get('code')?.value, this.codeForm.get('diamonds')?.value,
      this.codeForm.get('expireDate')?.value, this.codeForm.get('vipRequired')?.value).subscribe(
      () => {
        this.codeAdded = true;
        setTimeout(() => { this.codeAdded = false;}, 5000);
        this.retrieveAllCodes();
      },
      (error) => {
        console.error(error);
      },
      () => console.log("Code Added")
    );
  }

  deleteCodeById(id: number) {
    this.adminService.deleteCodeById(id).subscribe(
      () => {
        this.codeDeleted = true;
        setTimeout(() => { this.codeDeleted = false; }, 5000);
      },
      (error) => console.error(error),
      () => this.retrieveAllCodes()
    );
  }

}
