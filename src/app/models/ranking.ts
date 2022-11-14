export class Ranking {
  id: number;
  userId: number;
  accountName: string;
  accountServer: string;
  accountVip: number;
  cr: number;
  speed: number;
  admin: boolean;


  constructor(id: number, userId: number, accountName: string, accountServer: string, accountVip: number, cr: number, speed: number, admin: boolean) {
    this.id = id;
    this.userId = userId;
    this.accountName = accountName;
    this.accountServer = accountServer;
    this.accountVip = accountVip;
    this.cr = cr;
    this.speed = speed;
    this.admin = admin;
  }
}
