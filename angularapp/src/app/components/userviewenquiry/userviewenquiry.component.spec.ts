import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewenquiryComponent } from './userviewenquiry.component';

describe('UserviewenquiryComponent', () => {
  let component: UserviewenquiryComponent;
  let fixture: ComponentFixture<UserviewenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewenquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
