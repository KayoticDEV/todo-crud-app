import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from "rxjs";
import { TodoItem, Response } from './models';

@Injectable({
    providedIn: 'root'
})
export class CommonService {   
    private todoItems: Observable<TodoItem[]>;
    todoSubscription: Subscription;

    constructor(private apollo: Apollo) {
        this.todoItems = new Observable;
        this.todoSubscription = new Subscription;
    }

    getToDoItems() {
        return this.apollo.watchQuery<Response>({
            query: gql`
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

    createToDoItem(item: string) {
        this.apollo.mutate({
            mutation: gql`
            mutation ($item: String!) {
                insert_todoItem(objects: {item: $item}) {
                    affected_rows
                }
            }`,
            variables: {
                item
            },
        }).subscribe();
    }

    deleteToDoItem(id: number) {
        return this.apollo.mutate({
            mutation: gql`
            mutation ($id: Int) {
                delete_todoItem(where: {id: {_eq: $id}}) {
                  affected_rows
                }
            }`,
            variables: {
                id
            },
        });
    }

    updateToDoItem(id: number, item: string) {
        return this.apollo.mutate({
            mutation: gql`
            mutation ($id: Int, $item: String!) {
                update_todoItem(
                    where: {id: {_eq: $id}}, 
                    _set: {item: $item})
                {
                  affected_rows
                }
              }`,
            variables: {
                id, item
            },
        });
    }
}