import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesAdventureComponent } from './guides-adventure.component';

describe('GuidesAdventureComponent', () => {
  let component: GuidesAdventureComponent;
  let fixture: ComponentFixture<GuidesAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesAdventureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
