import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewsavingsplanComponent } from './userviewsavingsplan.component';

describe('UserviewsavingsplanComponent', () => {
  let component: UserviewsavingsplanComponent;
  let fixture: ComponentFixture<UserviewsavingsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewsavingsplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserviewsavingsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
