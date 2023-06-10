import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-poll-popup',
  templateUrl: './create-poll-popup.component.html',
  styleUrls: ['./create-poll-popup.component.css'],
})
export class CreatePollPopupComponent {
  title: string;
  content: string;
  responseStatus: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<CreatePollPopupComponent>,
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
