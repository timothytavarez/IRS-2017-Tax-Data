import { Injectable } from '@angular/core';
import { State } from './state';
import { StateData } from './states.data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private apiUri = 'https://tfdbapi01.azurewebsites.us/states';

  private states: State[] = [];
  constructor(public stateData: StateData, private http: HttpClient) { }

  getStatesObservable (): Observable<State[]> {
    return this.http.get<State[]>(this.apiUri);
  }

}
