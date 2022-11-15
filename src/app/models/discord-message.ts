export class DiscordMessage {
  author: any;
  content: string;
  timestamp: string;
  mentions: any;
  attachments: any;
  embeds: any;


  constructor(author: any, content: string, timestamp: string, mentions: any, attachments: any, embeds: any) {
    this.author = author;
    this.content = content;
    this.timestamp = timestamp;
    this.mentions = mentions;
    this.attachments = attachments;
    this.embeds = embeds;
  }
}
