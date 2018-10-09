import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateDataBoxComponent } from './state-data-box.component';

describe('StateDataBoxComponent', () => {
  let component: StateDataBoxComponent;
  let fixture: ComponentFixture<StateDataBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateDataBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateDataBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
