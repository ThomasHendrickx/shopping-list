import { TestBed, inject } from '@angular/core/testing';

import { QuantityTypesService } from './quantity-types.service';

describe('QuantityTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuantityTypesService]
    });
  });

  it('should be created', inject([QuantityTypesService], (service: QuantityTypesService) => {
    expect(service).toBeTruthy();
  }));
});
