import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenu } from '../interfaces/menu';

@Component({
  selector   : 'app-todo-menu-child',
  templateUrl: './todo-menu-child.component.html'
})
export class TodoMenuChildComponent implements OnInit {

  @Input() child: IMenu;
  @Input() activedMenuId: string;
  @Output() clickEmit: EventEmitter<IMenu> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
