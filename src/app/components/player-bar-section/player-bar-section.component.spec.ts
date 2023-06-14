import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBarSectionComponent } from './player-bar-section.component';

describe('PlayerBarSectionComponent', () => {
  let component: PlayerBarSectionComponent;
  let fixture: ComponentFixture<PlayerBarSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerBarSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerBarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
