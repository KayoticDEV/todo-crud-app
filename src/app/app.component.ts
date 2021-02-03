import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { TodoItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-crud-app';
  todoItems: TodoItem[] = [];
  isUpdate: boolean = false;
  todoItem = {
    id: -1,
    item: ''
  } 


  constructor(private commonService: CommonService) {  }

  ngOnInit() {
    this.fetchAllToDoItems();
  }

  fetchAllToDoItems() {
    this.commonService.getToDoItems().subscribe((todoItems: TodoItem[]) => {
      this.todoItems = todoItems
    });
  }

  addToDoItem(todoItem: TodoItem) {
    this.commonService.createToDoItem(todoItem.item);
  }

  removeToDoItem(todoItem: TodoItem) {
    this.commonService.deleteToDoItem(todoItem.id).subscribe(() =>
      this.fetchAllToDoItems()
    );
    this.isUpdate = false;
  }

  modifyToDoItem(todoItem: TodoItem) {
    this.commonService.updateToDoItem(todoItem.id, todoItem.item).subscribe(() =>
      this.fetchAllToDoItems()
    );
    this.isUpdate = false;
  }

  editToDoItem(todoItem: TodoItem) {
    this.todoItem = todoItem;
    this.isUpdate = true;
  }
}
