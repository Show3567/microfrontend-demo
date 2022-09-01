import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { RemoteCounterComponent } from './counter.component';
import { RemoteCounterReducer } from './ngrx/counter.reducers';

const routes: Routes = [
  {
    path: 'multiply',
    component: RemoteCounterComponent,
  },
];

@NgModule({
  declarations: [RemoteCounterComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('remotecounter', RemoteCounterReducer),
  ],
})
export class CounterModule {}
