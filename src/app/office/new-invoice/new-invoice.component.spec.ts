import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInvoiceComponent } from './new-invoice.component';

describe('BlankPageComponent', () => {
  let component: NewInvoiceComponent;
  let fixture: ComponentFixture<NewInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
