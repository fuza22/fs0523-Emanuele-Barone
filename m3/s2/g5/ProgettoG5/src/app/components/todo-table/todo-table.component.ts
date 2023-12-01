import { Component } from '@angular/core';
import { ITodo } from '../../models/i-todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: '.app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrl: './todo-table.component.scss'
})
export class TodoTableComponent {

  todo:ITodo[] = [];

  constructor(private todoSvc:TodoService){}
  todoArray!:ITodo[];
  partialArray!:ITodo[];


  ngOnInit(){
    this.todoSvc.getAll().then(todo => this.todo = todo)
  }

  completed(todo:ITodo){

    this.todoSvc.update(todo)

  }

}
