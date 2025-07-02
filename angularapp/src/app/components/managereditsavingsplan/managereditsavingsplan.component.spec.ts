import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagereditsavingsplanComponent } from './managereditsavingsplan.component';

describe('ManagereditsavingsplanComponent', () => {
  let component: ManagereditsavingsplanComponent;
  let fixture: ComponentFixture<ManagereditsavingsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagereditsavingsplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagereditsavingsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
