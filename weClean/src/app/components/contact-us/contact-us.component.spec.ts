import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactusComponent } from './contact-us.component';

describe('SignupComponent', () => {
  let component: contactusComponent;
  let fixture: ComponentFixture<contactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [contactusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(contactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
