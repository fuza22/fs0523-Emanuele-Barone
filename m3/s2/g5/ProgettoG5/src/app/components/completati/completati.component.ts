import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/i-todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent {

  constructor(private todoSvc:TodoService){}
  todo:ITodo[] = [];

  ngOnInit(){
    this.todoSvc.getAll().then(todo => this.todo = todo.filter(t => t.completed))
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
