import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShellService {
  private counter = 1;
  counter$ = new BehaviorSubject<number>(this.counter);

  // sessionListener$: Observable<StorageEvent> = fromEvent<StorageEvent>(
  //   window,
  //   'storage'
  // ).pipe(
  //   filter((event) => event.storageArea === sessionStorage),
  //   filter((event) => event.key === 'message'),
  //   tap((msg) => {
  //     console.log('msg: ', msg);
  //   })
  // );

  constructor() {
    fromEvent<StorageEvent>(window, 'storage').pipe(
      filter((event) => event.storageArea === sessionStorage),
      filter((event) => event.key === 'message'),
      tap((msg) => {
        console.log('msg: ', msg);
      })
    );
  }

  increase() {
    this.counter++;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counter$.next(this.counter);
  }

  decrease() {
    this.counter--;
    sessionStorage.setItem('counter', this.counter.toString());
    this.counter$.next(this.counter);
  }
}
