export class Spirit {
  spirit_id: number;
  spirit_name: string;
  rage_initial: number;
  rage_on_attack: number;
  rage_on_hit: number;
  rage_on_kill: number;
  description: string;


  constructor(spirit_id: number, spirit_name: string, rage_initial: number, rage_on_attack: number, rage_on_hit: number, rage_on_kill: number, description: string) {
    this.spirit_id = spirit_id;
    this.spirit_name = spirit_name;
    this.rage_initial = rage_initial;
    this.rage_on_attack = rage_on_attack;
    this.rage_on_hit = rage_on_hit;
    this.rage_on_kill = rage_on_kill;
    this.description = description;
  }
}
