import { TestBed } from '@angular/core/testing';

import { UIDataService } from './uidata.service';

describe('UIDataService', () => {
  let service: UIDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
