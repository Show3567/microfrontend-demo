import { createFeatureSelector, createSelector } from '@ngrx/store';

export const remoteCounterSelector =
  createFeatureSelector<any>('remotecounter');

export const remoteCountSelector = createSelector(
  remoteCounterSelector,
  (counterState: any) => counterState.remoteCount
);
