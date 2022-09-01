import { CounterState } from './counter/ngrx/counter.reducers';

export interface AppState {
  remotecounter: CounterState;
}
