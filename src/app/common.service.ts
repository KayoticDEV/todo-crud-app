import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import ggl from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
import { TodoItem, Response } from './models';

@Injectable({
    providedIn: 'root'
})
export class CommonService {   
    private todoItems: Observable<TodoItem[]>;

    constructor(private apollo: Apollo) {
        this.todoItems = new Observable;
    }

    getToDoItems() {
        return this.apollo.watchQuery<Response>({
            query: ggl`
            query {
                todoItem {
                  id
                  item
                }
            }`
        })
        .valueChanges
        .pipe(
            map(result => result.data.todoItem)
        );
    }

    createToDoItem(item: String) {
        return this.apollo.mutate({
            mutation: ggl`
            mutation ($item: String) {
                insert_todoItem(objects: {item: $item}) {
                    affected_rows
                }
            }`,
            variables: {
                item: String
            },
        }).subscribe();
    }

    deleteToDoItem(id: number) {
        console.log(id);
    }

    updateToDoItem(id: number, item: string) {
        console.log(id, item);
    }
}