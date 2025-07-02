import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddenquiryComponent } from './useraddenquiry.component';

describe('UseraddenquiryComponent', () => {
  let component: UseraddenquiryComponent;
  let fixture: ComponentFixture<UseraddenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddenquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraddenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
