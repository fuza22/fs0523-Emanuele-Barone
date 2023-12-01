import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { ITodo } from '../../models/i-todo';

@Component({
  selector: '.app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrl: './todo-creator.component.scss'
})
export class TodoCreatorComponent {
  constructor(
    private todoSvc:TodoService,
    private router:Router
    ){}

  newTodo:Partial<ITodo> = {
    completed:false,
  };

  response:ITodo|null = null;

  loading:boolean = false;

  addTodo(){
    this.loading = true;

    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false
      this.response = res;
      this.newTodo = {
      completed:false,
    }
})
}
}
