import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { IQuantityType } from "app/models";

@Injectable()
export class QuantityTypesService {

  private quantitytypes: FirebaseListObservable<IQuantityType[]>;

  constructor(private _db: AngularFireDatabase) {
    this.quantitytypes = _db.list('/quantitytypes');
  }

  getAll(): Observable<IQuantityType[]> {
    return this.quantitytypes;
  }

  get(id: string): Observable<IQuantityType> {
    return this.getAsFirebaseObservable(id);
  }  

  save(quantitytype: IQuantityType): string {
    if(quantitytype.$key) {
      this.saveQuantityType(quantitytype);
      return quantitytype.$key;
    }
    return this.createQuantityType(quantitytype);
  }

  private createQuantityType(quantitytype: IQuantityType): string {
    return this.quantitytypes.push(quantitytype).key;
  }

  private saveQuantityType(quantitytype: IQuantityType) {    
    const quantitytypeObs = this.getAsFirebaseObservable(quantitytype.$key);
    quantitytypeObs.update(quantitytype);
  }

  private getAsFirebaseObservable(id: string): FirebaseObjectObservable<IQuantityType> {
    const url = this.getUrlForQuantityTypeId(id);
    return this._db.object(url);
  }

  private getUrlForQuantityTypeId(id: string): string {
    return `/quantitytypes/${id}`;
  }

}
