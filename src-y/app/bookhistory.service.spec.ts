import { TestBed } from '@angular/core/testing';

import { BookhistoryService } from './bookhistory.service';

describe('BookhistoryService', () => {
  let service: BookhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
