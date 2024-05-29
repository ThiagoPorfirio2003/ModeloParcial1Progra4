import { TestBed } from '@angular/core/testing';

import { APIpaisesService } from './apipaises.service';

describe('APIpaisesService', () => {
  let service: APIpaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIpaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
