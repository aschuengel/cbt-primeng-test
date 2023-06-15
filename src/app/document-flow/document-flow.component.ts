import { Component } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { DocumentFlowService } from '../document-flow.service';

@Component({
  selector: 'app-document-flow',
  templateUrl: './document-flow.component.html',
  styleUrls: ['./document-flow.component.css'],
  providers: [MessageService]
})
export class DocumentFlowComponent {
  data: TreeNode[] = [];
  frozenCols = [{ field: 'name', header: 'Name' }];

  constructor(documentFlow: DocumentFlowService, private messageService: MessageService) {
    documentFlow.getFlow().subscribe(flow => {
      this.data = [];
      for (let inquiry of flow) {
        const inquiryNode: TreeNode = {
          label: inquiry.name,
          data: inquiry,
          children: []
        };
        for (let configuration of inquiry.configurations) {
          const quotationNode: TreeNode = {
            label: configuration.quotation.name,
            data: configuration.quotation,
            children: []
          };
          const configurationNode: TreeNode = {
            label: configuration.name,
            data: configuration,
            children: [quotationNode]
          };
          inquiryNode.children?.push(configurationNode);
        }
        this.data.push(inquiryNode);
      }
    });
  }
  click(documentType: string, documentNumber: string) {
    this.messageService.add({ severity: 'info', summary: documentType, detail: documentNumber });
  }
  clickOwner(owner: string) {
    this.messageService.add({ severity: 'info', summary: 'Owner', detail: owner });
  }
}
