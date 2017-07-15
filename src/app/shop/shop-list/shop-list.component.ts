import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { ICategory } from "app/models";
import { ShopsService } from "app/service/shops.service";
import { DragulaService } from "ng2-dragula";

declare let $;

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnChanges, OnInit {
  @Input() orderedCategories: ICategory[];
  @Output() orderChanged: EventEmitter<any> = new EventEmitter;

  bag: any;
  one: any;

  constructor(
    private _dragula: DragulaService
  ) { }

  ngOnInit(){
    this._dragula.drop.subscribe((value: HTMLElement[]) => {
      let [ unknown, moved, orignalContainer, newContainer, insertedBefore ] = value;
      this.orderChanged.emit({
        moved: moved.id, 
        before: insertedBefore ? insertedBefore.id : insertedBefore
      });
    })
  }

  ngOnChanges() {
  }

}
