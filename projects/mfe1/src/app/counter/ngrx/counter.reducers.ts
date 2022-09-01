import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  remoteCount: number;
}

export const initialState: CounterState = {
  remoteCount: 1,
};

export const RemoteCounterReducer = createReducer(
  initialState,
  on(CounterActions.MultiplyByAmount, (state, { amount }) => ({
    ...state,
    remoteCount: state.remoteCount * amount,
  }))
);

// export function reducer(state: CounterState | undefined, action: Action) {
//   return counterReducer(state, action);
// }
