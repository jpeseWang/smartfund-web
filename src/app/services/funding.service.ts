import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class FundingService {
  constructor(private readonly apiConfigService: ApiConfigService) {}

  getAllPolls() {
    return this.apiConfigService.get<any>(`funding-poll/fundingPoll`);
  }

  getPollById(id: string) {
    return this.apiConfigService.get<any>(`funding-poll/fundingPoll/${id}`);
  }

  getAvailOptions(id: string) {
    return this.apiConfigService.get<any>(
      `funding-poll/fundingPoll/options/${id}`
    );
  }

  createNewPoll(data: any) {
    return this.apiConfigService.post<any>(
      'funding-poll/fundingPoll/create',
      data
    );
  }

  fundToPoll(data: any) {
    return this.apiConfigService.post<any>(
      'funding-poll/fundingPoll/fund',
      data
    );
  }
}
