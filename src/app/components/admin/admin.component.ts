import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin.service";
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";
import {EventService} from "../../services/event.service";
import {CurrentEvent} from "../../models/current-event";
import {UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService, private authService: AuthService, private eventService: EventService, private route: ActivatedRoute) { }

  addEventForm = new UntypedFormGroup({
    eventName: new UntypedFormControl(''),
    eventDate: new UntypedFormControl(''),
    eventPokemon: new UntypedFormControl('')
  })

  dateValid: boolean = true;
  success: boolean = false;
  eventDeleted: boolean = false;
  eventTypes!: any;
  allEvents!: CurrentEvent[];
  allAdmins!: User[];
  activePage: string = 'overview';
  superAdmin: boolean = false;
  currentDate!: string;

  ngOnInit(): void {
    if(this.authService.userId == 2)
    {
      this.superAdmin = true;
    }
    this.getAdmins();
    this.getCurrentEvents();
    let tab = this.route.snapshot.paramMap.get('tab');
    if(tab)
    {
      switch(tab)
      {
        case 'overview':
          this.activePage = 'overview';
          break;
        case 'events':
          this.activePage = 'events';
          break;
        case 'codes':
          this.activePage = 'codes';
          break;
        case 'appinfo':
          this.activePage = 'appinfo';
          break;
        default:
          this.activePage = 'overview';
      }
    }
  }

  changePage(page: string) {
    this.activePage = page;
    if(this.activePage == 'events')
    {
      this.getEventTypes();
      this.getTodayDate();
      this.addEventForm.get('eventDate')?.setValue(this.currentDate);
    }
  }

  getAdmins() {
    this.adminService.getAdmins().subscribe(
      (response) => this.allAdmins = response,
      (error) => console.error(error),
      () => console.log("Fetching admin list")
    );
  }

  getCurrentEvents() {
    this.eventService.getCurrentEvents().subscribe(
      (response) => this.allEvents = response,
      (error) => console.error(error)
    );
  }

  getEventTypes() {
    this.eventService.getEventTypes().subscribe(
      (response) => this.eventTypes = response,
      (error) => console.error(error)
    );
  }

  deleteAdmin(id: number) {
    this.adminService.deleteAdmin(id).subscribe(
      (response) => console.log("Deleted admin"),
      (error) => console.error(error)
    );
  }

  getTodayDate()
  {
    let today = new Date();
    let month = today.getMonth() + 1;
    this.currentDate = today.getFullYear() + '-' + month + '-' + today.getDate();
  }

  validateDate(dateString: string): boolean {
    let splitter;
    if(dateString.indexOf("-") != -1)
    {
      splitter = dateString.split("-");
    }
    else if(dateString.indexOf("/") != -1)
    {
      splitter = dateString.split("/");
    }
    else
    {
      return false;
    }
    if(splitter.length != 3)
    {
      return false;
    }
    let year;
    let day;
    let month;

    if(splitter[0].length == 4)
    {
      year =  parseInt(splitter[0]);
      month = parseInt(splitter[1]);
      day = parseInt(splitter[2]);
    }
    else if(splitter[0].length == 2 && splitter[2].length == 4)
    {
      year = parseInt(splitter[2]);
      month = parseInt(splitter[0]);
      day = parseInt(splitter[1]);
    }
    else
    {
      return false;
    }
    // Now the date parts are initialized, do logic tests
    if(year < 2022 || year > 2099)
    {
      return false;
    }
    if(month > 12 || month < 1)
    {
      return false;
    }
    return !(day > 31 || day < 1);

  }

  resetForm() {
    this.addEventForm.get('eventDate')?.setValue(this.getTodayDate());
    this.addEventForm.get('eventPokemon')?.setValue('');
  }

  deleteEvent(id: number) {
    this.adminService.deleteEvent(id).subscribe(
      () => {
        this.eventDeleted = true;
        // Remove the message after 5 seconds
        setTimeout(() => this.eventDeleted = false, 5000);
        console.log("Event deleted")
      },
      (error) => console.error(error),
      () => this.getCurrentEvents()
    );
  }

  addEvent() {
    if(this.validateDate(this.addEventForm.get('eventDate')?.value))
    {
      this.dateValid = true;
      this.adminService.addEvent(this.addEventForm.get('eventName')?.value, this.addEventForm.get('eventDate')?.value, this.addEventForm.get('eventPokemon')?.value)
        .subscribe(
          (response) => {
            this.success = true;
            // Clear the success after 5 seconds
            setTimeout(() => this.success = false, 5000);
            console.log(response);
          },
          (error) => console.error(error),
          () => {
            this.getCurrentEvents();
          }
        );
    }
    else
    {
      this.dateValid = false;
    }
  }
}
