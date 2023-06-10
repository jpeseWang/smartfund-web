import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePollPopupComponent } from './create-poll-popup.component';

describe('CreatePollPopupComponent', () => {
  let component: CreatePollPopupComponent;
  let fixture: ComponentFixture<CreatePollPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePollPopupComponent]
    });
    fixture = TestBed.createComponent(CreatePollPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
