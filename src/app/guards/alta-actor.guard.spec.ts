import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { altaActorGuard } from './alta-actor.guard';

describe('altaActorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => altaActorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
