import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesavingsplanComponent } from './createsavingsplan.component';

describe('CreatesavingsplanComponent', () => {
  let component: CreatesavingsplanComponent;
  let fixture: ComponentFixture<CreatesavingsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatesavingsplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesavingsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
