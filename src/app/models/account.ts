export class Account {
   id: number;
   accountName: string;
   cr: number;
   accountServer: string;
   accountVip: number;
   speed: number;
   avatar: string;
   signature: string;
   team: string;
   usertitle: string;
   admin: boolean;
   dateRegister: string;

  constructor(id: number, accountName: string, cr: number, accountServer: string, accountVip: number, speed: number,
              avatar: string, signature: string, team: string, usertitle: string, admin: boolean, dateRegister: string) {
    this.id = id;
    this.accountName = accountName;
    this.cr = cr;
    this.accountServer = accountServer;
    this.accountVip = accountVip;
    this.speed = speed;
    this.avatar = avatar;
    this.signature = signature;
    this.team = team;
    this.usertitle = usertitle;
    this.admin = admin;
    this.dateRegister = dateRegister;
  }
}
