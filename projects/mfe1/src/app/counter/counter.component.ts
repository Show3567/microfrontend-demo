import { Component, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.interfaces';
import { countSelector } from './ngrx/counter.selectors';
import * as CounterActions from './ngrx/counter.actions';
import { ShellService } from 'projects/shell/src/app/services/shell.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
})
export class RemoteCounterComponent implements OnInit {
  incrementAmount = 1;
  count$!: Observable<number>;
  counter = 40;

  constructor(
    private store: Store<AppState>,
    @Optional() private shellService: ShellService
  ) {}

  ngOnInit(): void {
    this.shellService.counter$.subscribe((num) => {
      this.counter = num;
    });
    this.count$ = this.store.select(countSelector);
  }

  multiplyByAmount() {
    const amount = +this.incrementAmount !== 0 ? +this.incrementAmount : 1;
    this.store.dispatch(CounterActions.MultiplyByAmount({ amount }));
  }

  increase() {
    this.shellService.increase();
  }
  decrease() {
    this.shellService.decrease();
  }
}
