import {Component, OnInit} from '@angular/core';
import {TodoInterface} from '../models/todo';
import {TodosService} from '../services/todos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // todosArray: TodoInterface[] = [
  //   {name: 'buy milk', done: false, id: 0},
  //   {name: 'drink beer', done: true, id: 1},
  //   {name: 'write todo', done: false, id: 3},
  // ];

  todosArray: any[] = [];

  constructor(private todoService: TodosService) {
  }

  ngOnInit() {
    this.todoService.getTodods().then((todos: any[]) => {
      this.todosArray = todos;
    });
  }

  addTodo($event: TodoInterface) {
    this.todoService.createTodo($event)
      .then((allTodos: any[]) => {
        this.todosArray = allTodos;
      });
  }

  doneTodoInMainComponent(todoId: string) {
    this.todoService.updateTodo(todoId, {done: true})
      .then((allTodos: any[]) => {
        this.todosArray = allTodos;
      });

    // this.todosArray = this.todosArray.map(item => {
    //   if (item.id === todoId) {
    //     item.done = true;
    //   }
    //   return item;
    // });
  }

  removeTodo(todoId: string) {

    this.todoService.removeTodo(todoId)
      .then((allTodos: any[]) => {
        this.todosArray = allTodos;
      });
    // this.todosArray = this.todosArray.filter(item => {
    //   return item.id !== todoId;
    // });
  }
}
