export class Gem {
  trait: string;
  traitValue: string;
  color: string;
  attack: number;
  defense: number;
  hp: number;
  bonus: string;
  bonusValue: number;
  description: string;


  constructor(trait: string, traitValue: string, color: string, attack: number, defense: number, hp: number, bonus: string, bonusValue: number, description: string) {
    this.trait = trait;
    this.traitValue = traitValue;
    this.color = color;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.bonus = bonus;
    this.bonusValue = bonusValue;
    this.description = description;
  }
}
