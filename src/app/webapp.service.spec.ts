import { TestBed, inject } from '@angular/core/testing';

import { WebappService } from './webapp.service';

describe('WebappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebappService]
    });
  });

  it('should be created', inject([WebappService], (service: WebappService) => {
    expect(service).toBeTruthy();
  }));
});
