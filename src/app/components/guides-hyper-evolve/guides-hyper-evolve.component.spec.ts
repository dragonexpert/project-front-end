import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidesHyperEvolveComponent } from './guides-hyper-evolve.component';

describe('GuidesHyperEvolveComponent', () => {
  let component: GuidesHyperEvolveComponent;
  let fixture: ComponentFixture<GuidesHyperEvolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidesHyperEvolveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidesHyperEvolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
