import { DocumentFlowConfiguration } from "./document-flow-configuration";
import { DocumentFlowItem } from "./document-flow-item";

export interface DocumentFlowInquiry extends DocumentFlowItem {
    configurations: DocumentFlowConfiguration[];
}
