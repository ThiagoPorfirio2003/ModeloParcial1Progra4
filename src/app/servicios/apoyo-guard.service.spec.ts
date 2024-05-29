import { TestBed } from '@angular/core/testing';

import { ApoyoGuardService } from './apoyo-guard.service';

describe('ApoyoGuardService', () => {
  let service: ApoyoGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApoyoGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
