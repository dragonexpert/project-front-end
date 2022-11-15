export class GalleryBonus {
  private _points: number;
  private _hp: number;
  private _hpPercent: number;
  private _atk: number;
  private _atkPercent: number;
  private _def: number;
  private _defPercent: number;
  private _other: string;
  private _bonusName: string;

  constructor(points: number, hp: number, hpPercent: number, atk: number, atkPercent: number, def: number, defPercent: number, other: string, bonusName: string) {
    this._points = points;
    this._hp = hp;
    this._hpPercent = hpPercent;
    this._atk = atk;
    this._atkPercent = atkPercent;
    this._def = def;
    this._defPercent = defPercent;
    this._other = other;
    this._bonusName = bonusName;
  }

  get points(): number {
    return this._points;
  }

  set points(value: number) {
    this._points = value;
  }

  get hp(): number {
    return this._hp;
  }

  set hp(value: number) {
    this._hp = value;
  }

  get hpPercent(): number {
    return this._hpPercent;
  }

  set hpPercent(value: number) {
    this._hpPercent = value;
  }

  get atk(): number {
    return this._atk;
  }

  set atk(value: number) {
    this._atk = value;
  }

  get atkPercent(): number {
    return this._atkPercent;
  }

  set atkPercent(value: number) {
    this._atkPercent = value;
  }

  get def(): number {
    return this._def;
  }

  set def(value: number) {
    this._def = value;
  }

  get defPercent(): number {
    return this._defPercent;
  }

  set defPercent(value: number) {
    this._defPercent = value;
  }

  get other(): string {
    return this._other;
  }

  set other(value: string) {
    this._other = value;
  }

  get bonusName(): string {
    return this._bonusName;
  }

  set bonusName(value: string) {
    this._bonusName = value;
  }
}
