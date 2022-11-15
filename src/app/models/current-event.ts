export class CurrentEvent {
  id: number;
  eventName: string;
  pokemon: string;
  eventDate: string;


  constructor(id: number, eventName: string, pokemon: string, eventDate: string) {
    this.id = id;
    this.eventName = eventName;
    this.pokemon = pokemon;
    this.eventDate = eventDate;
  }
}
