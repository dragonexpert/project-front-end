export class User {
  id: number;
  username: string;
  admin: boolean;
  email: string;
  date_register: string;


  constructor(id: number, username: string, admin: boolean, email: string, date_register: string) {
    this.id = id;
    this.username = username;
    this.admin = admin;
    this.email = email;
    this.date_register = date_register;
  }
}
