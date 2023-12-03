import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/i-todo';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss'
})
export class CompletatiComponent implements OnInit {
  todo: ITodo[] = [];
  loading: boolean = true;

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoSvc.getAll()
    .then(todo => {
      this.todo = todo.filter(t => t.completed);
      this.loading = false;
    })
  }

  completed(todo: ITodo) {
    this.todoSvc.update(todo).then(() => {
      const index = this.todo.findIndex(t => todo.id === t.id);
      this.todo.splice(index, 1);
    });
  }

  remove(todo: ITodo) {
    this.todoSvc.delete(todo.id).then(() => {
      const index = this.todo.findIndex(t => todo.id === t.id);
      this.todo.splice(index, 1);
    });
  }
}
