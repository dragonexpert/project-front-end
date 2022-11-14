export class Faq {
  question: string;
  answer: any;
  id: number;

  constructor(question: string, answer: any, id: number) {
    this.question = question;
    this.answer = answer;
    this.id = id;
  }
}
