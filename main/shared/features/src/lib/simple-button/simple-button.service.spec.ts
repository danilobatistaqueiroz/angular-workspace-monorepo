import { TestBed } from '@angular/core/testing';

import { SimpleButtonService } from './simple-button.service';

describe('SimpleButtonService', () => {
  let service: SimpleButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
