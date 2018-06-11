import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls  : [ './todo.component.less' ]
})
export class TodoComponent implements OnInit {
  todoValue = '';
  todoLists = [
    {
      id     : 0,
      checked: false,
      value  : 'Learn Angular 6',
      created: new Date()
    },
    {
      id     : 1,
      checked: false,
      value  : 'Learn NG ZORRO - Layout',
      created: new Date()
    },
    {
      id     : 2,
      checked: false,
      value  : 'Learn NG ZORRO - Menu',
      created: new Date()
    },
    {
      id     : 3,
      checked: false,
      value  : 'Learn NG ZORRO - Grid',
      created: new Date()
    }
  ];

  completedList = [];

  // add todo
  addTodo() {
    this.todoLists = [ ...this.todoLists, {
      id     : this.todoLists.length,
      checked: false,
      value  : this.todoValue,
      created: new Date()
    } ];
    this.todoValue = '';
  }

  // remove todo
  removeTodo(data) {
    data.created = new Date();
    this.todoLists = this.todoLists.filter(todo => todo.id !== data.id);
    this.completedList = [ ...this.completedList, data ];
  }

  constructor() {
  }

  ngOnInit() {
  }

}
