import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { IShop } from "app/models";
import { Select2OptionData } from "ng2-select2/ng2-select2";

@Component({
  selector: 'app-list-top-control',
  templateUrl: './list-top-control.component.html',
  styleUrls: ['./list-top-control.component.css']
})
export class ListTopControlComponent implements OnInit, OnChanges {

  @Input() shops: IShop[];
  @Output() onShopChanged: EventEmitter<string> = new EventEmitter;
  @Output() onShopModusSet: EventEmitter<boolean> = new EventEmitter;
  selectableShops: Array<Select2OptionData>;
  select2Options = {width: '100%', height: '100%'};

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.shops && this.shops.length) {
      this.selectableShops = this.shops.map(function(shop: IShop){
        return {id: shop.$key, text: shop.name};
      });
    }
  }

  shopChanged($event) {
    this.onShopChanged.emit($event.value);
  }

  onShopBtnClicked() {
    this.onShopModusSet.emit(true);
  }
}
