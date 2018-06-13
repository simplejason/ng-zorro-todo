import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenu } from '../interfaces/menu';

@Component({
  selector   : 'app-todo-menu',
  templateUrl: './todo-menu.component.html',
  styleUrls  : [ './todo-menu.component.less' ]
})
export class TodoMenuComponent implements OnInit {

  @Input() menu: IMenu;
  @Input() activedMenuId;

  @Output() todoOutputEmit: EventEmitter<IMenu> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
