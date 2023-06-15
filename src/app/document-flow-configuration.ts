import { DocumentFlowItem } from "./document-flow-item";
import { DocumentFlowQuotation } from "./document-flow-quotation";

export interface DocumentFlowConfiguration extends DocumentFlowItem {
    quotation: DocumentFlowQuotation;
}
