import { dataTask } from './data';
import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;
  tasks: Task[] = dataTask;
  taskName: string;

  constructor() {
    this.config = {
      title: 'Lista Zadań',
      footer: '© Lista zadań,All rights reserved.',
      date: new Date(),
    };
  }

  clearTask() {
    this.tasks = [];
  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: '2020-02-02',
      done: false,
    };
    this.tasks.push(task);
  }
}
