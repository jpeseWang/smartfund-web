import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FundingService } from '../../../services';

@Component({
  selector: 'app-create-poll-popup',
  templateUrl: './create-poll-popup.component.html',
  styleUrls: ['./create-poll-popup.component.css'],
})
export class CreatePollPopupComponent {
  title: string;
  content: string;
  responseStatus: number | null = null;

  deadline = '';

  constructor(
    public dialogRef: MatDialogRef<CreatePollPopupComponent>,
    private fundingService: FundingService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title.text;
    this.content = data.content.text;
  }

  dateChanged($event: any) {
    this.deadline = $event.target.value.toISOString();
  }

  createPoll(title: string, milestone: string, description: string) {
    this.fundingService
      .createNewPoll({
        title,
        description,
        milestone: Number(milestone),
        deadline: new Date(this.deadline),
      })
      .subscribe((res) => {
        window.location.href = res.data.payment_url;
      });
  }
}
