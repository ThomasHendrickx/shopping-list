import { Injectable } from '@angular/core';
import { Utils } from "app/utils";
import { IShop } from "app/models/shop.model";
import { ICategory } from "app/models";
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShopsService {
  
  private shops: FirebaseListObservable<IShop[]>;

  constructor(private _db: AngularFireDatabase) {
    this.shops = _db.list('/shops');
  }

  getAll(): Observable<IShop[]> {
    return this.shops;
  }

  get(id: string): Observable<IShop> {
    return this.getAsFirebaseObservable(id);
  }  

  save(shop: IShop): string {
    if(shop.$key) {
      this.saveShop(shop);
      return shop.$key;
    }
    return this.createShop(shop);
  }

  private createShop(shop: IShop): string {
    return this.shops.push(shop).key;
  }

  private saveShop(shop: IShop) {    
    const shopObs = this.getAsFirebaseObservable(shop.$key);
    shopObs.update(shop);
  }

  private getAsFirebaseObservable(id: string): FirebaseObjectObservable<IShop> {
    const url = this.getUrlForShopId(id);
    return this._db.object(url);
  }

  private getUrlForShopId(id: string): string {
    return `/shops/${id}`;
  }

}
