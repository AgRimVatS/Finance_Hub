import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewfeedbackComponent } from './adminviewfeedback.component';

describe('AdminviewfeedbackComponent', () => {
  let component: AdminviewfeedbackComponent;
  let fixture: ComponentFixture<AdminviewfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewfeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
