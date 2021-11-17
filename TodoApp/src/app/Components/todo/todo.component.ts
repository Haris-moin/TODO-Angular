import { Todo } from './../../models/todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoItem: Todo={id:"",content:"",isDone:false};
  @Input() indexItem: any;
  @Output() modifyEvent = new EventEmitter();
  isDisabled = true;
  editTodo: string ="";

  constructor() { }

  ngOnInit(): void {
    this.editTodo = this.todoItem.content;
  }

  modifyItem(id: string, action: string, text?: string, index?:number) {
    console.log(index);
    if (text){
      this.modifyEvent.emit({ id, action, text,index});
      this.isDisabled = true;
    } else{
      this.modifyEvent.emit({id, action,index});
      this.isDisabled = true;
    }
  }
  
  edit() {
    this.isDisabled = !this.isDisabled
  }
}
