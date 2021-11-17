import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  inputTodo:string="";
  
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        id:"0",
        content:"Appoinment with Doctor",
        isDone:false
      },
      {
        id:"1",
        content:"Meeting in School",
        isDone:false
      },
      {
        id:"2",
        content:'compelete some work',
        isDone:false
      }
    ]
  }

  modifyTodo(obj: { action: string; id: string; text: string; index:number;}) {

    if(obj.action=="delete") {
      this.todos= this.todos.filter((todo)=> todo.id!=obj.id)
    }
    else if(obj.action=="check"){
      
      this.todos[obj.index].isDone=!this.todos[obj.index].isDone;
     
      // this.todos= this.todos.map(todo=>{
      //   if(todo.id==obj.id){
      //     todo.isDone=!todo.isDone
      //     console.log(todo)
      //   }
        
      //   return todo
      // });
    } 
    else if(obj.action=='edit') {
      this.todos[obj.index].content=obj.text
      // this.todos= this.todos.map(todo=>{
      //   if(todo.id==obj.id) {
      //     todo.content=obj.text;
      //   }
      //   return todo;
      // })
    }
  }
  addTodo(){
    if(this.inputTodo.trim()!=""){
      this.todos.push({
        id:this.inputTodo + this.todos.length,
        content:this.inputTodo,
        isDone:false
      });
      this.inputTodo=""
    }
    
  }

  // toggleEditing(id: number){
  //   if(this.inputTodo.trim()!=""){
  //     this.todos =  this.todos.map((todo, i)=>{
  //       if(i==id){
  //         todo.content = this.inputTodo;
  //       }
  //       return todo;
  //     });
  //     this.inputTodo="";
  //   }
  
  // }
  // editing(id: Number){
  //  this.todos.map((todo))
  //   this.isEditable = !this.isEditable
  // }
  // deleteItem(id:Number){
  //   this.todos= this.todos.filter((todo, i)=> i!=id)
  // }
  // deleteTodo(id:string)
  
  // {
    
  //   this.todos = this.todos.filter(todo=>id!=todo.id)
  //   console.log(id);
  // }
  
}
