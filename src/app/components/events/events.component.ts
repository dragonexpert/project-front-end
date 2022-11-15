import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";
import {CurrentEvent} from "../../models/current-event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService: EventService) { }

  activePage!: string;

  currentEvents!: CurrentEvent[];

  eventTypes!: any;

  singleEvent!: any;

  ngOnInit(): void {
    this.activePage = 'currentEvents';
    this.loadCurrentEvents();
    this.loadEventTypes();
  }

  changePage(page: string): void {
    this.activePage = page;
  }

  loadCurrentEvents(): void {
    this.eventService.getCurrentEvents().subscribe(
      (response) => this.currentEvents = response,
      (error) => console.error(error),
      () => console.log("Loaded current events")
    );
  }

  loadEventTypes(): void {
    this.eventService.getEventTypes().subscribe(
      (response) => this.eventTypes = response,
      (error) => console.error(error),
      () => console.log("Loaded event types")
    );
  }

  getSingleEvent(eventType: string) {
    this.eventService.getSingleEventType(eventType).subscribe(
      (response) => this.singleEvent = response,
      (error) => console.error(error),
      () => console.log("Loading event data for event type: " + eventType)
    );
  }

  singleEventPage(eventType: string) {
    this.getSingleEvent(eventType);
    this.changePage('singleEvent');
  }

}
