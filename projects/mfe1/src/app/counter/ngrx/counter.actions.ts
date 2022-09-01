import { createAction, props } from '@ngrx/store';

export const MultiplyByAmount = createAction(
  '[Counter Component] MultiplyByAmount',
  props<{ amount: number }>()
);
