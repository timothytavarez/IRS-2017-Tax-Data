import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StateDataBoxComponent } from './state-data-box/state-data-box.component';
import { StateData } from './states.data';
import { StateService } from './state.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        StateDataBoxComponent,
        StateData,
        StateService
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TaxRevenue'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('TaxRevenue');
  });
});
