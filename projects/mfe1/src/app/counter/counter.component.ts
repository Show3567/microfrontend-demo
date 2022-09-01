import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.interfaces';
import { countSelector } from './ngrx/counter.selectors';
import * as CounterActions from './ngrx/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class RemoteCounterComponent implements OnInit {
  incrementAmount = 0;
  count$!: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.count$ = this.store.select(countSelector);
  }

  multiplyByAmount() {
    this.store.dispatch(
      CounterActions.MultiplyByAmount({ amount: +this.incrementAmount })
    );
  }
}
