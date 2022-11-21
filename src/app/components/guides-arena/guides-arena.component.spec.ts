import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesArenaComponent } from './guides-arena.component';

describe('GuidesArenaComponent', () => {
  let component: GuidesArenaComponent;
  let fixture: ComponentFixture<GuidesArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesArenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
