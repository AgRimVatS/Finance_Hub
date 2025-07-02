import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerviewenquiriesComponent } from './managerviewenquiries.component';

describe('ManagerviewenquiriesComponent', () => {
  let component: ManagerviewenquiriesComponent;
  let fixture: ComponentFixture<ManagerviewenquiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerviewenquiriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerviewenquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
