import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ShellService } from './services/shell.service';
import { remoteCounterSelector } from './counter/counter-ngrx/remotecounter.selector';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shell';
  remotecounter = 0;
  private eventLitenerSubscription = new Subscription();

  constructor(
    public shellService: ShellService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.eventLitenerSubscription = this.shellService
      .liteningEvent()
      .subscribe();
    // this.store.select(remoteCounterSelector).subscribe((data: any) => {
    //   if (data && data.remoteCount) {
    //     this.remotecounter = data.remoteCount;
    //   }
    // });
  }
  ngOnDestroy(): void {
    this.eventLitenerSubscription.unsubscribe();
  }
}
