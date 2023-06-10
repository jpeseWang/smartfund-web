import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingPopupComponent } from './funding-popup.component';

describe('FundingPopupComponent', () => {
  let component: FundingPopupComponent;
  let fixture: ComponentFixture<FundingPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundingPopupComponent]
    });
    fixture = TestBed.createComponent(FundingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
