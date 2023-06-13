import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCheckboxComponent } from './nav-checkbox.component';

describe('NavCheckboxComponent', () => {
  let component: NavCheckboxComponent;
  let fixture: ComponentFixture<NavCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
