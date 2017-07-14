import { Injectable } from '@angular/core';
import { Utils } from "app/utils";
import { IList } from "app/models/list.model";
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ListsService {
  
  private lists: FirebaseListObservable<IList[]>;

  constructor(private _db: AngularFireDatabase) {
    this.lists = _db.list('/lists');
  }

  getAll(): Observable<IList[]> {
    return this.lists;
  }

  get(id: string): Observable<IList> {
    return this.getAsFirebaseObservable(id);
  }  

  save(list: IList): string {
    if(list.$key) {
      this.saveList(list);
      return list.$key;
    }
    return this.createList(list);
  }

  private createList(list: IList): string {
    return this.lists.push(list).key;
  }

  private saveList(list: IList) {    
    const listObs = this.getAsFirebaseObservable(list.$key);
    listObs.update(list);
  }

  private getAsFirebaseObservable(id: string): FirebaseObjectObservable<IList> {
    const url = this.getUrlForListId(id);
    return this._db.object(url);
  }

  private getUrlForListId(id: string): string {
    return `/lists/${id}`;
  }
}