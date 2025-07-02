import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserappliedloanComponent } from './userappliedloan.component';

describe('UserappliedloanComponent', () => {
  let component: UserappliedloanComponent;
  let fixture: ComponentFixture<UserappliedloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserappliedloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserappliedloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
