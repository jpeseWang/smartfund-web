import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class CandypayService {
  constructor(private readonly apiConfigService: ApiConfigService) {}
}
