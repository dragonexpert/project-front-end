export class Gallery {
  galleryName: string;
  unlockPoints: number;
  unlockStarup: number;


  constructor(galleryName: string, unlockPoints: number, unlockStarup: number) {
    this.galleryName = galleryName;
    this.unlockPoints = unlockPoints;
    this.unlockStarup = unlockStarup;
  }
}
