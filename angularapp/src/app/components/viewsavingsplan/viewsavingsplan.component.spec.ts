import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsavingsplanComponent } from './viewsavingsplan.component';

describe('ViewsavingsplanComponent', () => {
  let component: ViewsavingsplanComponent;
  let fixture: ComponentFixture<ViewsavingsplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsavingsplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsavingsplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
