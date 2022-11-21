import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesGrowthComponent } from './guides-growth.component';

describe('GuidesGrowthComponent', () => {
  let component: GuidesGrowthComponent;
  let fixture: ComponentFixture<GuidesGrowthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesGrowthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
