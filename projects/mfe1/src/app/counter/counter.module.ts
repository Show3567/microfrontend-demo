import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RemoteCounterComponent } from './counter.component';

@NgModule({
  declarations: [RemoteCounterComponent],
  imports: [CommonModule, FormsModule],
})
export class CounterModule {}
