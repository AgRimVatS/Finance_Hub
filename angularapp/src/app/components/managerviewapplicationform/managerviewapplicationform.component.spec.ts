import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerviewapplicationformComponent } from './managerviewapplicationform.component';

describe('ManagerviewapplicationformComponent', () => {
  let component: ManagerviewapplicationformComponent;
  let fixture: ComponentFixture<ManagerviewapplicationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerviewapplicationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerviewapplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
