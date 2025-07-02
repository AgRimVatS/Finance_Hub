import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserappliedplansComponent } from './userappliedplans.component';

describe('UserappliedplansComponent', () => {
  let component: UserappliedplansComponent;
  let fixture: ComponentFixture<UserappliedplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserappliedplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserappliedplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
