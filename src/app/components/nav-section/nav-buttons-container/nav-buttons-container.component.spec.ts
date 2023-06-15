import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavButtonsContainerComponent } from './nav-buttons-container.component';

describe('NavButtonsContainerComponent', () => {
  let component: NavButtonsContainerComponent;
  let fixture: ComponentFixture<NavButtonsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavButtonsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavButtonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
