import { Injectable } from '@angular/core';
import { State } from './state';
import { StateData } from './states.data';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private states: State[] = [];
  constructor(public stateData: StateData) { }

  getStates() {
    return this.states = this.stateData.readStates();
  }

}