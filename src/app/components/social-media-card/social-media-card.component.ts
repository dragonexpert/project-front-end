import {Component, Input, OnInit} from '@angular/core';
import {DiscordMessage} from "../../models/discord-message";


@Component({
  selector: 'tr[app-social-media-card]',
  templateUrl: './social-media-card.component.html',
  styleUrls: ['./social-media-card.component.css']
})
export class SocialMediaCardComponent implements OnInit {

  constructor() { }

  @Input() message!: DiscordMessage;
  author!: string;
  time!: string;
  avatar!: string;
  replacement!: string;

  ngOnInit(): void {
    this.author = this.message.author.username
    this.formatTime();
    this.parseMentions();
    this.parseImages();
    this.getAvatar();
    this.parseEmojis();
  }

  formatTime() {
    let date = new Date(this.message.timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    this.time = `${hours}:${minutes}`;
  }

  parseMentions() {
    for(let x = 0; x < this.message.mentions.length; x++)
    {
      let id = this.message.mentions[x].id;
      let username = this.message.mentions[x].username;
      this.message.content = this.message.content.replace("<@" + id + ">", "<i><b>" + username + "</b></i>");
    }
  }

  parseImages() {
    if(this.message.content.indexOf(".gif") !== -1 || this.message.content.indexOf(".png") !== -1)
    {
      let words = this.message.content.split(" ");
      let contentString = "";
      for(let z = 0; z < words.length; z++)
      {
        if(words[z].endsWith(".gif") || words[z].endsWith(".png"))
        {
          contentString += "<div class='message-image'><img src='" + words[z] + "' alt='" + words[z] + "'></div>";
        }
        else
        {
          contentString += words[z];
        }
      }
      this.message.content = contentString;
    }
  }

  parseEmojis() {
    let words = this.message.content.split(" ");
    let contentString = "";
    let baseUrl = "https://cdn.discordapp.com/emojis";
    let space = "";
    for(let z = 0; z < words.length; z++)
    {
      let parts = words[z].split(":");
      if(parts.length == 3)
      {
        let id = parts[2].replace(">", "");
        this.replacement = `<img src="${baseUrl}/${id}.png" alt="${parts[1]}" width="48px" height="48px" />`;
        contentString += space + this.replacement;
        space = " ";
      }
      else
      {
        contentString += space + words[z];
        space = " ";
      }
    }
    this.message.content = contentString;
  }

  getAvatar() {
    let baseUrl = "https://cdn.discordapp.com";
    let userId = this.message.author.id;
    let hash = this.message.author.avatar;
    let discriminator = this.message.author.discriminator % 5;
    if(hash)
    {
      this.avatar = `${baseUrl}/avatars/${userId}/${hash}.png`;
    }
    else
    {
      this.avatar = `${baseUrl}/embed/avatars/${discriminator}.png`;
    }
  }
}
