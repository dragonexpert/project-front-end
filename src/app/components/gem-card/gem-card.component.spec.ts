import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemCardComponent } from './gem-card.component';

describe('GemCardComponent', () => {
  let component: GemCardComponent;
  let fixture: ComponentFixture<GemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
