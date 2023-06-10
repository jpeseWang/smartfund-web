import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
} from '../../environments/constants';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  getAllEntries() {
    return from(this.client.getEntries());
  }

  getEntryById(id: string) {
    return from(this.client.getEntry(id));
  }
}
