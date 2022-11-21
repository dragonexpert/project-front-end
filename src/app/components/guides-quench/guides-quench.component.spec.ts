import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesQuenchComponent } from './guides-quench.component';

describe('GuidesQuenchComponent', () => {
  let component: GuidesQuenchComponent;
  let fixture: ComponentFixture<GuidesQuenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesQuenchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesQuenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
