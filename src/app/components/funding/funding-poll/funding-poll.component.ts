import { Component, OnInit } from '@angular/core';
import { FundingService } from '../../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funding-poll',
  templateUrl: './funding-poll.component.html',
  styleUrls: ['./funding-poll.component.css'],
})
export class FundingPollComponent implements OnInit {
  fundingPoll: any;

  constructor(
    private fundingService: FundingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.fundingService.getPollById(id).subscribe((res) => {
        console.log(res);

        this.fundingPoll = res.data;
      });
    });
  }
}
