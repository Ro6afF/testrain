import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

import { Emotion } from './models/emotion';
import { Statement } from './models/statement';
import { Statiment } from './models/statiment';
import { Submission } from './models/submission';
import { Miniscript } from "./models/miniscript";
import { Awareness } from "./models/awareness";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebappService {
  constructor(private http: Http) { }

  getEmotions(): Promise<Emotion[]> {
    return this.http.get('api/emotions').toPromise()
      .then(response => Promise.resolve(response.json() as Emotion[]))
      .catch(this.handleError);
  }

  getStatements(): Promise<Statement[]> {
    return this.http.get('api/statements').toPromise()
      .then(response => Promise.resolve(response.json() as Statement[]))
      .catch(this.handleError);
  }

  getStatiments(): Promise<Statiment[]> {
    return this.http.get('api/statiments').toPromise()
      .then(response => Promise.resolve(response.json() as Statiment[]))
      .catch(this.handleError);
  }

  getMiniscripts(): Promise<Miniscript[]> {
    return this.http.get('api/miniscripts').toPromise()
      .then(response => Promise.resolve(response.json() as Miniscript[]))
      .catch(this.handleError);
  }

  submit(obj: Submission): Promise<string> {
    return this.http.post('api/submit', obj).toPromise()
      .then(x => Promise.resolve(x.text()))
      .catch(this.handleError);
  }

  getSumbission(id: any): Promise<Submission> {
    return this.http.get('api/submission/' + id).toPromise()
      .then(response => Promise.resolve(response.json() as Submission))
      .catch(this.handleError);
  }

  getAwarenesses(): Promise<Awareness[]> {
    return this.http.get('api/awarenesses').toPromise()
      .then(response => Promise.resolve(response.json() as Awareness[]))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
