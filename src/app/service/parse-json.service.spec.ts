import { TestBed } from '@angular/core/testing';

import { ParseJsonService } from './parse-json.service';

describe('ParseJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseJsonService = TestBed.get(ParseJsonService);
    expect(service).toBeTruthy();
  });
});
