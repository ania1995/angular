import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lista Zadań';

  getFooter(): string {
    return '© Lista zadań,All rights reserved.';
  }
  getDate(): Date {
    return new Date();
  }
}
