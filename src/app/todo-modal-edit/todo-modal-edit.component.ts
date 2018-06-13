import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector   : 'app-todo-modal-edit',
  templateUrl: './todo-modal-edit.component.html',
  styleUrls  : [ './todo-modal-edit.component.less' ]
})
export class TodoModalEditComponent implements OnInit {

  @Input() todo;

  newValue;

  confirmEdit() {
    this.modalRef.destroy(this.newValue);
  }

  constructor(private modalRef: NzModalRef) {
  }

  ngOnInit() {
  }

}
