import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { IMenu } from '../interfaces/menu';
import { ITodo } from '../interfaces/todo';
import { TodoModalEditComponent } from '../todo-modal-edit/todo-modal-edit.component';

@Component({
  selector   : 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls  : [ './todo.component.less' ]
})
export class TodoComponent implements OnInit {
  todoValue = '';
  // add menu
  activedMenu;
  todoMenu: IMenu[] = [
    {
      id  : '100',
      name: '今日'
    },
    {
      id      : '200',
      name    : '一周',
      children: [
        {
          id  : '201',
          name: '周一'
        },
        {
          id  : '202',
          name: '周二'
        },
        {
          id  : '203',
          name: '周三'
        }
      ]
    },
    {
      id  : '300',
      name: '垃圾箱'
    }
  ];

  todoLists: ITodo[] = [
    {
      id      : 0,
      checked : false,
      value   : 'Learn Angular 6',
      created : new Date(),
      parentId: '100'
    },
    {
      id      : 1,
      checked : false,
      value   : 'Learn NG ZORRO - Layout',
      created : new Date(),
      parentId: '100'
    },
    {
      id      : 2,
      checked : false,
      value   : 'Learn NG ZORRO - Menu',
      created : new Date(),
      parentId: '100'
    },
    {
      id      : 3,
      checked : false,
      value   : 'Learn NG ZORRO - Grid',
      created : new Date(),
      parentId: '100'
    }
  ];

  completedList: ITodo[] = [];

  // add todo
  addTodo() {
    this.todoLists.push({
      id      : this.todoLists.length,
      checked : false,
      value   : this.todoValue,
      created : new Date(),
      parentId: this.activedMenu.id
    });
    this.activeMenuItem(this.activedMenu);
    this.todoValue = '';
  }

  // remove todo
  removeTodo(data) {
    data.created = new Date();
    data.checked = true;
    this.todoLists = this.todoLists.filter(todo => todo.id !== data.id);
    this.completedList.push(data);
    // 更新菜单
    this.activeMenuItem(this.activedMenu);
    console.log(this.todoLists, this.completedList);
  }

  // delete task
  deleteTodo(data) {
    this.todoLists.splice(this.todoLists.findIndex(todo => todo.id === data.id), 1);
    this.activeMenuItem(this.activedMenu);
    this.message.success(`${data.value} - Deleted Successfully!`, { nzDuration: 3000 });
  }

  // edit task value
  editTodo(data) {
    const modalSubject = this.modalService.create({
      nzTitle          : 'Edit Task',
      nzFooter         : null,
      nzContent        : TodoModalEditComponent,
      nzComponentParams: {
        todo: data
      }
    });
    modalSubject.afterClose.subscribe(newValue => {
      if (newValue) {
        // update task
        data.value = newValue;
        data.created = new Date();
      }
    });
  }

  // 激活menu节点
  activeMenuItem(item: IMenu) {
    this.activedMenu = item;
    this.activedMenu.todoLists = this.todoLists.filter(todo => todo.parentId === item.id);
    this.activedMenu.completedList = this.completedList.filter(todo => todo.parentId === item.id);
  }

  constructor(private message: NzMessageService, private modalService: NzModalService) {
  }

  ngOnInit() {
    this.activedMenu = this.todoMenu[ 0 ];
    this.activeMenuItem(this.activedMenu);
  }

}
