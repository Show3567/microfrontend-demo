import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight/flight.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FlightComponent,
  },
];

@NgModule({
  declarations: [FlightComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FlightsModule {}
