import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  { path: 'adder', component: CounterComponent },
  {
    path: 'remote',
    // & ['mfe1', 'RemoteModule'].join('');
    loadChildren: () =>
      import('mfe1/RemoteModule').then((m) => m.CounterModule),
  },
  { path: '', redirectTo: '/adder', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
