import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFundPopupComponent } from './create-fund-popup.component';

describe('CreateFundPopupComponent', () => {
  let component: CreateFundPopupComponent;
  let fixture: ComponentFixture<CreateFundPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFundPopupComponent]
    });
    fixture = TestBed.createComponent(CreateFundPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
