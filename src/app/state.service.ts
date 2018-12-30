import { Injectable } from '@angular/core';
import { State } from './state';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public states: State[] = [];
  constructor(private http: HttpClient) { }

  public getStatesObservable(): Observable<any> {
    return this.http.get('./assets/states.json');
  }

}
