import {Component, OnInit} from '@angular/core';
import {TodoInterface} from '../models/todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todosArray: TodoInterface[] = [
    {name: 'buy milk', done: false, id: 0},
    {name: 'drink beer', done: true, id: 1},
    {name: 'write todo', done: false, id: 3},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addTodo($event: TodoInterface) {
    this.todosArray.push($event);
  }

  doneTodoInMainComponent(todoId: number) {
    this.todosArray = this.todosArray.map(item => {
      if (item.id === todoId) {
        item.done = true;
      }
      return item;
    });
  }

  removeTodo(todoId: number) {
    this.todosArray = this.todosArray.filter(item => {
      return item.id !== todoId;
    });
  }
}
