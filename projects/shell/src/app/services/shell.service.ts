import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShellService {
  private counter = 1;
  counter$ = new BehaviorSubject<number>(this.counter);

  constructor() {}

  increase() {
    this.counter++;
    this.counter$.next(this.counter);
  }

  decrease() {
    this.counter--;
    this.counter$.next(this.counter);
  }
}
