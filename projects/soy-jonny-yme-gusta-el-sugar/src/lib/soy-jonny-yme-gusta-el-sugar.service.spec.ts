import { TestBed } from '@angular/core/testing';

import { SoyJonnyYMeGustaElSugarService } from './soy-jonny-yme-gusta-el-sugar.service';

describe('SoyJonnyYMeGustaElSugarService', () => {
  let service: SoyJonnyYMeGustaElSugarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoyJonnyYMeGustaElSugarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
