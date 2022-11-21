export class User {
  id: number;
  username: string;
  admin: boolean;
  email: string;
  date_register: string;
  dateRegister: string;


  constructor(id: number, username: string, admin: boolean, email: string, date_register: string, dateRegister: string) {
    this.id = id;
    this.username = username;
    this.admin = admin;
    this.email = email;
    this.date_register = date_register;
    if(!this.date_register)
    {
      this.date_register = dateRegister;
    }
    this.dateRegister = dateRegister;
  }
}
