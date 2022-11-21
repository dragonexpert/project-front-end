export class GuideName {
  id: number;
  name: string;
  slug: string;
  active: boolean;


  constructor(id: number, name: string, slug: string, active: boolean) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.active = active;
  }
}
