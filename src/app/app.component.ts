import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { ToDoItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-crud-app';
  todoItems: ToDoItem[] = [];

  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.fetchAllToDoItems();
  }

  fetchAllToDoItems() {
    console.log(this.commonService.getToDoItems());
  }

  addToDoItem(item: string) {
    this.commonService.createToDoItem(item);
  }

  removeToDoItem(todoItem: ToDoItem) {
    this.commonService.deleteToDoItem(todoItem.id);
  }

  modifyToDoItem(todoItem: ToDoItem) {
    this.commonService.updateToDoItem(todoItem.id, todoItem.item);
  }
}
