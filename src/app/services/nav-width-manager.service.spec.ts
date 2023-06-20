import { TestBed } from '@angular/core/testing';

import { NavWidthManagerService } from './nav-width-manager.service';

describe('NavWidthManagerService', () => {
  let service: NavWidthManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavWidthManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
