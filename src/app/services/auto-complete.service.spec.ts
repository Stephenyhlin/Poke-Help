import { TestBed } from '@angular/core/testing';

import { AutoCompleteService } from './auto-complete.service';

describe('AutoCompleteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutoCompleteService = TestBed.get(AutoCompleteService);
    expect(service).toBeTruthy();
  });
});
