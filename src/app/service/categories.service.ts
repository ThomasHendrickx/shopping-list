import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { ICategory } from "app/models";
import { Observable } from "rxjs/Observable";
import { Query } from "app/models/query.model";

@Injectable()
export class CategoriesService {

  private categories: FirebaseListObservable<ICategory[]>;

  constructor(private _db: AngularFireDatabase) {
    this.categories = _db.list('/categories');
  }

  getAll(query?: Query): Observable<ICategory[]> {
    if(query) {
      return this._db.list('/categories', query)
    } else {
      return this.categories;
    }
  }

  get(id: string): Observable<ICategory> {
    return this.getAsFirebaseObservable(id);
  }  

  save(category: ICategory): string {
    if(category.$key) {
      this.saveShop(category);
      return category.$key;
    }
    return this.createShop(category);
  }

  private createShop(category: ICategory): string {
    return this.categories.push(category).key;
  }

  private saveShop(category: ICategory) {    
    const categoryObs = this.getAsFirebaseObservable(category.$key);
    categoryObs.update(category);
  }

  private getAsFirebaseObservable(id: string): FirebaseObjectObservable<ICategory> {
    const url = this.getUrlForShopId(id);
    return this._db.object(url);
  }

  private getUrlForShopId(id: string): string {
    return `/categories/${id}`;
  }
}
