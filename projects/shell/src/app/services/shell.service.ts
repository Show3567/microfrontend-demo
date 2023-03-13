import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShellService implements OnDestroy {
  private subscrpition$ = new Subscription();

  private counter = 10;
  counter$ = new BehaviorSubject<number>(this.counter);

  constructor() {
    this.subscrpition$ = fromEvent<StorageEvent>(window, 'counterEvent')
      .pipe(
        tap((data: any) => {
          this.counter = data.detail.counter;
          this.counter$.next(this.counter);
        })
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.subscrpition$.unsubscribe();
  }

  increase() {
    this.counter++;
    const counterEvent = new CustomEvent('counterEvent', {
      detail: {
        counter: this.counter,
      },
    });
    window.dispatchEvent(counterEvent);
    // this.counter$.next(this.counter);
  }

  decrease() {
    this.counter--;
    // sessionStorage.setItem('counter', this.counter.toString());
    this.counter$.next(this.counter);
  }
}
