import { CounterState } from './counter/counter-ngrx/counter.reducers';

export interface AppState {
  counter: CounterState;
}
