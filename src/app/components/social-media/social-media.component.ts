import { Component, OnInit } from '@angular/core';
import {DiscordMessage} from "../../models/discord-message";
import {DiscordService} from "../../services/discord.service";

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  constructor(private discordService: DiscordService) { }

  ngOnInit(): void {
    this.chronologicalMessages = [];
    this.ShowDiscordMessages();
    console.log(this.chronologicalMessages);
  }

  allMessages!: DiscordMessage[];
  chronologicalMessages!: DiscordMessage[];

  ShowDiscordMessages() {
    this.discordService.getMessageInMainChannel().subscribe(
      (response) => this.allMessages = this.reverseResponse(response),
      (error) => console.error(error),
      () => console.log("Getting Discord messages")
    );
  }

  reverseResponse(response: DiscordMessage[]) {
    let y = 0;
    for(let x = 49; x >= 0; x--)
    {
      this.chronologicalMessages[y] = response[x];
      y++;
    }
    return this.chronologicalMessages;
  }

}
