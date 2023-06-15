import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentFlowComponent } from './document-flow.component';

describe('DocumentFlowComponent', () => {
  let component: DocumentFlowComponent;
  let fixture: ComponentFixture<DocumentFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
