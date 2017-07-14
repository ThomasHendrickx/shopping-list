import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-top',
  templateUrl: './shop-top.component.html',
  styleUrls: ['./shop-top.component.css']
})
export class ShopTopComponent implements OnInit, OnChanges {

  @Input() originalShopName: string;
  @Input() disable: boolean;
  @Output() save: EventEmitter<string> = new EventEmitter<string>();
  shopName: string;


  constructor() { }

  ngOnInit() {
    this.shopName = this.originalShopName;
  }

  ngOnChanges() {
    this.shopName = this.originalShopName;
  }

  saveClick() {
    console.log('save');
    this.save.emit(this.shopName);
  }

}
