import { Component } from '@angular/core';
import { ShellService } from './services/shell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  constructor(public shellService: ShellService) {}
}
