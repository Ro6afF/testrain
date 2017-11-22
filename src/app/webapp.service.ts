import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

import { Emotion } from './models/emotion';
import { Statement } from './models/statement';
import { Statiment } from './models/statiment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebappService {
  constructor(private http: Http) { }

  getEmotions(): Promise<Emotion[]> {
    return this.http.get('api/emotions').toPromise()
      .then(response => response.json() as Emotion[])
      .catch(this.handleError);
  }

  getStatements(): Promise<Statement[]> {
    return this.http.get('api/statements').toPromise()
      .then(response => response.json() as Statement[])
      .catch(this.handleError);
  }

  getStatiments(): Promise<Statiment[]> {
    return this.http.get('api/statiments').toPromise()
      .then(response => response.json() as Statiment[])
      .catch(this.handleError);
  }

  submit(obj): void {
    this.http.post('api/sumbit', obj);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
