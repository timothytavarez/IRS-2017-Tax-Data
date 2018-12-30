import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { StateService } from '../state.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-state-data-box',
  templateUrl: './state-data-box.component.html',
  styleUrls: ['./state-data-box.component.css']
})
export class StateDataBoxComponent implements OnInit {

  private states: State[] = [];

  constructor(public stateService: StateService) { }

  ngOnInit() {
    this.stateService.getStatesObservable()
      .subscribe(
        state => {
          state.forEach(arrayItem => {
            this.states.push(arrayItem);
          });
        },
        error => {
          console.log(error);
        },
        () => {
          console.log(this.states);
        }
      );
  }

}
