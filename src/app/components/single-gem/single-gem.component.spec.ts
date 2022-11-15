import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGemComponent } from './single-gem.component';

describe('SingleGemComponent', () => {
  let component: SingleGemComponent;
  let fixture: ComponentFixture<SingleGemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleGemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleGemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
