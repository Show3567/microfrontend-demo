import { Component, OnInit } from '@angular/core';
import { ShellService } from './services/shell.service';
import { Store } from '@ngrx/store';
import { remoteCounterSelector } from './counter/counter-ngrx/remotecounter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  remotecounter = 0;

  constructor(
    public shellService: ShellService,
    private readonly store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(remoteCounterSelector).subscribe((data: any) => {
      if (data && data.remoteCount) {
        this.remotecounter = data.remoteCount;
      }
    });
  }
}
