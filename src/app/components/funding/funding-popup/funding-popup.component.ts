import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDateRangeInput } from '@angular/material/datepicker';

@Component({
  selector: 'app-funding-popup',
  templateUrl: './funding-popup.component.html',
  styleUrls: ['./funding-popup.component.css'],
})
export class FundingPopupComponent {
  title: string;
  content: string;
  responseStatus: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<FundingPopupComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title.text;
    this.content = data.content.text;
  }

  dateChanged($event: any) {
    console.log($event.target.value.toISOString());
  }
}
