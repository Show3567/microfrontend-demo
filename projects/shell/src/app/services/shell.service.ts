import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShellService {
  private counter = 0;
  counter$ = new BehaviorSubject<number>(this.counter);

  constructor() {}

  liteningEvent(): Observable<null> {
    return fromEvent<StorageEvent>(window, 'counterEvent').pipe(
      tap((data: any) => {
        this.counter = data.detail.counter;
        this.counter$.next(this.counter);
      })
    );
  }

  increase(): void {
    this.counter++;
    const counterEvent = new CustomEvent('counterEvent', {
      detail: {
        counter: this.counter,
      },
    });
    window.dispatchEvent(counterEvent);
    // this.counter$.next(this.counter);
  }

  decrease(): void {
    this.counter--;
    // sessionStorage.setItem('counter', this.counter.toString());
    this.counter$.next(this.counter);
  }
}
