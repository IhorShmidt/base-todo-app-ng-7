import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TodoInterface} from '../../models/todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @Output() addTodo = new EventEmitter();

  @ViewChild('newTodo') newTodo;

  constructor() {
  }

  ngOnInit() {
  }

  onAddTodo(newValue: string) {

    const newId = parseInt('' + Math.random() * 10000000, 10);

    // find in todo array if this fucking id present bleat

    const todo: TodoInterface = {
      name: newValue,
      done: false,
      id: newId
    };

    this.newTodo.nativeElement.value = '';
    this.addTodo.emit(todo);
  }
}
