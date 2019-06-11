import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ParseJsonService {
  url = 'https://equantin.github.io/16personalities-api/api/all.json';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
}

