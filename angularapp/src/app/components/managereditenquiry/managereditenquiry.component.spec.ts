import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereditenquiryComponent } from './managereditenquiry.component';

describe('ManagereditenquiryComponent', () => {
  let component: ManagereditenquiryComponent;
  let fixture: ComponentFixture<ManagereditenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagereditenquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagereditenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
