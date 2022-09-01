import { createAction, props } from '@ngrx/store';

export const Increment = createAction('[Counter Component] Increment');

export const Decrement = createAction('[Counter Component] Decrement');

export const IncrementByAmount = createAction(
  '[Counter Component] IncrementByAmount',
  props<{ amount: number }>()
);
