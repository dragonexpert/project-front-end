export class Code {
  id: number;
  code: string;
  vipRequired: number;
  diamonds: number;


  constructor(id: number, code: string, vipRequired: number, diamonds: number) {
    this.id = id;
    this.code = code;
    this.vipRequired = vipRequired;
    this.diamonds = diamonds;
  }
}
