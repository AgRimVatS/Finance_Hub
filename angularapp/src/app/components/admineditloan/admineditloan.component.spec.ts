import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditloanComponent } from './admineditloan.component';

describe('AdmineditloanComponent', () => {
  let component: AdmineditloanComponent;
  let fixture: ComponentFixture<AdmineditloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
