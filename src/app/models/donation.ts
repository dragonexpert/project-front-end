export class Donation {
  id: number;
  userId: number;
  amount: number;
  date: string;
  username: string;
  admin: boolean;


  constructor(id: number, user_id: number, amount: number, date: string, username: string, admin: boolean) {
    this.id = id;
    this.userId = user_id;
    this.amount = amount;
    this.date = date;
    this.username = username;
    this.admin = admin;
  }
}
