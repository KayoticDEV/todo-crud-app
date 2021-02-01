import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import ggl from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { ToDoItem, Response } from './models';

@Injectable({
    providedIn: 'root'
})
export class CommonService {   
    private toDoItems: Observable<ToDoItem[]>;

    constructor(private apollo: Apollo) {
        this.toDoItems = this.getToDoItems();
    }

    getToDoItems() {
        return this.apollo.watchQuery<Response>({
            query: ggl`
            query {
                toDoItem {
                  id
                  item
                }
              }`
        })
        .valueChanges
        .pipe(
            map(result => result.data.toDoItem)
        );
    }

    createToDoItem(item: string) {
        console.log(item);
    }

    deleteToDoItem(id: number) {
        console.log(id);
    }

    updateToDoItem(id: number, item: string) {
        console.log(id, item);
    }
}