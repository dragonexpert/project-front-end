import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBonusCardComponent } from './gallery-bonus-card.component';

describe('GalleryBonusCardComponent', () => {
  let component: GalleryBonusCardComponent;
  let fixture: ComponentFixture<GalleryBonusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBonusCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBonusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
