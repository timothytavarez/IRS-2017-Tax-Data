import { Component, OnInit } from '@angular/core';
import { State } from '../state';
import { StateService } from '../state.service';

@Component({
  selector: 'app-state-data-box',
  templateUrl: './state-data-box.component.html',
  styleUrls: ['./state-data-box.component.css']
})
export class StateDataBoxComponent implements OnInit {

  public states: State[] = [];
  constructor(public stateService: StateService) { }

  ngOnInit() {
    return this.states = this.stateService.getStates();
  }

}
