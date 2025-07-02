import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedloanComponent } from './requestedloan.component';

describe('RequestedloanComponent', () => {
  let component: RequestedloanComponent;
  let fixture: ComponentFixture<RequestedloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
