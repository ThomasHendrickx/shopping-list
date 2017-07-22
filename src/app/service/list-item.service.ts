import { Injectable } from '@angular/core';
import { IListItem } from "app/models";
import { Utils } from "app/utils";
import { AfoObjectObservable, AfoListObservable, AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ListItemService {

  private listItems: AfoListObservable<IListItem[]>;

  constructor(private _db: AngularFireOfflineDatabase) {
    this.listItems = _db.list('/list-items');
  }

  get(id: string): Observable<IListItem> {
    return this.getAsFirebaseObservable(id);
  }  

  save(listItem: IListItem): string {
    if(listItem.$key) {
      this.saveListItem(listItem);
      return listItem.$key;
    }
    return this.createListItem(listItem);
  }

  delete(id: string): void {
    this.getAsFirebaseObservable(id).remove();
  }

  private createListItem(listItem: IListItem): string {
    return this.listItems.push(listItem).key;
  }

  private saveListItem(listItem: IListItem) {    
    const listItemObs = this.getAsFirebaseObservable(listItem.$key);
    listItemObs.update(listItem);
  }

  private getAsFirebaseObservable(id: string): AfoObjectObservable<IListItem> {
    const url = this.getUrlForListItemId(id);
    return this._db.object(url);
  }

  private getUrlForListItemId(id: string): string {
    return `/list-items/${id}`;
  }

}
