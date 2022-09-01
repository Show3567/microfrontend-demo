import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteCounterComponent } from './counter/counter.component';

const routes: Routes = [{ path: '', component: RemoteCounterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
