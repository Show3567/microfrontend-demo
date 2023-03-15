import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../app.interfaces';
import { countSelector } from './counter-ngrx/counter.selectors';
import * as CounterActions from './counter-ngrx/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  incrementAmount = 0;
  count$!: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.count$ = this.store.select(countSelector);
  }

  increment() {
    this.store.dispatch(CounterActions.Increment());
  }
  decrement() {
    this.store.dispatch(CounterActions.Decrement());
  }
  incrementByAmount() {
    this.store.dispatch(
      CounterActions.IncrementByAmount({ amount: +this.incrementAmount })
    );
  }
}
