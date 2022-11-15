export class Pokemon {
  name: string;
  pokemonId!: number;
  pokemon_id: number;
  type: string;
  tier_id: number;
  tierId!: number;
  weapon: string;
  badge: string;
  spirit_id: number;
  spiritId!: number;
  evolve_gem: string;
  evolveGem!: string;
  food: string;
  custom_gem_id: number;


  constructor(name: string, pokemon_id: number, type: string, tier_id: number, weapon: string, badge: string, spirit_id: number, evolve_gem: string, food: string, custom_gem_id: number, evolveGem: string, pokemonId: number, tierId: number, spiritId: number) {
    this.name = name;
    this.pokemon_id = pokemon_id;
    this.pokemonId = pokemonId;
    this.type = type;
    this.tier_id = tier_id;
    this.tierId = tierId;
    this.weapon = weapon;
    this.badge = badge;
    this.spirit_id = spirit_id;
    this.spiritId = spiritId;
    this.evolve_gem = evolve_gem;
    this.evolveGem = evolveGem;
    this.food = food;
    this.custom_gem_id = custom_gem_id;
  }
}
