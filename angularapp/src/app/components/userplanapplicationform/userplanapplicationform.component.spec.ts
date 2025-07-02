import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserplanapplicationformComponent } from './userplanapplicationform.component';

describe('UserplanapplicationformComponent', () => {
  let component: UserplanapplicationformComponent;
  let fixture: ComponentFixture<UserplanapplicationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserplanapplicationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserplanapplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
