import { TestBed } from '@angular/core/testing';

import { IasrestService } from './iasrest.service';

describe('IasrestService', () => {
  let service: IasrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IasrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
