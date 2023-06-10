import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingPollComponent } from './funding-poll.component';

describe('FundingPollComponent', () => {
  let component: FundingPollComponent;
  let fixture: ComponentFixture<FundingPollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundingPollComponent]
    });
    fixture = TestBed.createComponent(FundingPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
