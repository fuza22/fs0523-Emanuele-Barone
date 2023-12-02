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
    this.todoSvc.getAll().then(todo => this.todo = todo.filter(t => !t.completed))
  }

  completed(todo:ITodo){

    this.todoSvc.update(todo)
    .then(()=>{
      let i = this.todo.findIndex(t => todo.id == t.id)
      this.todo.splice(i,1)})
  }



  remove(todo:ITodo){

    this.todoSvc.delete(todo.id)
    .then(()=>{let i=this.todo .findIndex(t => todo.id == t.id)
    this.todo.splice(i,1)})

  }

}
