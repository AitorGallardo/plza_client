import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWithMailComponent } from './signup-with-mail.component';

describe('SignupWithMailComponent', () => {
  let component: SignupWithMailComponent;
  let fixture: ComponentFixture<SignupWithMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupWithMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupWithMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
