import { TestBed } from '@angular/core/testing';

import { DocumentFlowService } from './document-flow.service';

describe('DocumentFlowService', () => {
  let service: DocumentFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
