import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.Increment, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(CounterActions.Decrement, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(CounterActions.IncrementByAmount, (state, { amount }) => ({
    ...state,
    count: state.count + amount,
  }))
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
