export class Account {
  id: number;
  accountName: string;
  cr: number;
  accountServer: string;
  accountVip: number;
  speed: number;

  constructor(id: number, accountName: string, cr: number, accountServer: string, accountVip: number, speed: number) {
    this.id = id;
    this.accountName = accountName;
    this.cr = cr;
    this.accountServer = accountServer;
    this.accountVip = accountVip;
    this.speed = speed;
  }
}
