import { Injectable } from '@angular/core';
import { ITodo } from '../models/i-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  apiUrl:string = 'http://localhost:3000/todo';

  getAll():Promise<ITodo[]>{
    return fetch(this.apiUrl).then(res => res.json())
  }

  getById(id:string):Promise<ITodo>{
    return fetch(this.apiUrl+`/${id}`).then(res => res.json())
  }

  create(todo:Partial<ITodo>):Promise<ITodo>{
    return fetch(this.apiUrl,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(todo)
    }).then(res => res.json())

  }

  delete(id:number):Promise<ITodo>{
    return fetch(this.apiUrl+`/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(deletedTodo => {
      alert(`Il todo con id ${id} è stato cancellato`);
      return deletedTodo;
    })
  }

  update(todo: ITodo): Promise<ITodo> {
    const urlID = `http://localhost:3000/todo/${todo.id}`;

    return fetch(urlID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed, title: todo.title}),
    })
      .then((res) => res.json())
      .then((updatedTodo: ITodo) => {

        alert(`Il task con id ${todo.id} è stato aggiornato`);
        return updatedTodo;

      });
  }
}


