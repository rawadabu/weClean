import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorks } from './how-it-works.component';

describe('HowItWorksComponent', () => {
  let component: HowItWorks;
  let fixture: ComponentFixture<HowItWorks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowItWorks],
    }).compileComponents();

    fixture = TestBed.createComponent(HowItWorks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the HowItWorksComponent', () => {
    expect(component).toBeTruthy();
  });
});
