import { Component, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/i-todo';

@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrl: './todo-creator.component.scss'
})
export class TodoCreatorComponent {

  @Output() todoCreated: EventEmitter<ITodo> = new EventEmitter<ITodo>();

  constructor(private todoSvc: TodoService) {}

  newTodo: Partial<ITodo> = {
    completed: false,
  };

  response: ITodo | null = null;
  loading: boolean = false;

  save() {
    this.loading = true;

    this.todoSvc.create(this.newTodo).then(res => {
      this.loading = false;
      this.response = res;
      this.newTodo = {
        completed: false,
      };
      this.todoCreated.emit(res);
    });
  }
}
