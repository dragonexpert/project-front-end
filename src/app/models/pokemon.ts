export class Pokemon {
  name: string;
  pokemon_id: number;
  type: string;
  tier_id: number;
  weapon: string;
  badge: string;
  spirit_id: number;
  evolve_gem: string;
  food: string;
  custom_gem_id: number;


  constructor(name: string, pokemon_id: number, type: string, tier_id: number, weapon: string, badge: string, spirit_id: number, evolve_gem: string, food: string, custom_gem_id: number) {
    this.name = name;
    this.pokemon_id = pokemon_id;
    this.type = type;
    this.tier_id = tier_id;
    this.weapon = weapon;
    this.badge = badge;
    this.spirit_id = spirit_id;
    this.evolve_gem = evolve_gem;
    this.food = food;
    this.custom_gem_id = custom_gem_id;
  }
}
