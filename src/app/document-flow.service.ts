import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocumentFlowInquiry } from './document-flow-inquiry';

@Injectable({
  providedIn: 'root'
})
export class DocumentFlowService {
  // TODO: Replace this with a call to the backend.
  getFlow(): Observable<DocumentFlowInquiry[]> {
    const flow: DocumentFlowInquiry[] = [{
      name: 'Inquiry 1',
      created: new Date(),
      updated: new Date(),
      configurations: [],
      type: 'inquiry',
      documentNumber: 'I-123456',
      owner: 'Achim Westermann'
    }];
    for (let i = 0; i < 10; i++) {
      const quotation = {
        name: `Quotation ${i + 1}`,
        created: new Date(),
        updated: new Date(),
        type: 'quotation',
        documentNumber: `Q-123456-${i + 1}`,
        owner: 'Achim Westermann'
      };
      flow[0].configurations.push({
        name: `Configuration ${i + 1}`,
        created: new Date(),
        updated: new Date(),
        type: 'configuration',
        documentNumber: `C-123456-${i + 1}`,
        owner: 'Achim Westermann',
        quotation: quotation
      });
    }
    return of(flow);
  }

  constructor() { }
}
