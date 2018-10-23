import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state-data-box',
  templateUrl: './state-data-box.component.html',
  styleUrls: ['./state-data-box.component.css']
})
export class StateDataBoxComponent implements OnInit {

  public states = [];

  constructor(public stateService: StateService) { }

  ngOnInit() {
    this.stateService.getStatesObservable()
      .subscribe(state => {
        this.states.push(state);
        console.log(this.states);
      });
  }

}
