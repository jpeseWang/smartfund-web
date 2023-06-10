import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FundingComponent } from './funding/funding.component';
import { FundingPopupComponent } from './funding-popup/funding-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [FundingComponent, FundingPopupComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
})
export class MarketplaceModule {}
