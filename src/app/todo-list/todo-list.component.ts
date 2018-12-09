import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoInterface} from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  @Input() todos: TodoInterface[];

  @Output() doneTodoEvent = new EventEmitter();
  @Output() removeTodoEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  doneTodo(todo: TodoInterface) {
    this.doneTodoEvent.emit(todo.id);
  }

  removeTodo(id: number) {
    this.removeTodoEvent.emit(id);
  }
}
