import { Component, OnInit } from '@angular/core';
import { ShopsService } from "app/service/shops.service";
import { Instance } from "app/global.storage";
import { IShop } from "app/models";

@Component({
  selector: 'app-overview-shops',
  templateUrl: './overview-shops.component.html',
  styleUrls: ['./overview-shops.component.css']
})
export class OverviewShopsComponent implements OnInit {

  shops: IShop[];

  constructor(private _shopService: ShopsService) { }

  ngOnInit() {
    Instance.pushProperty("pagetitle","Winkels");
    this._shopService.getAll().subscribe((shops: IShop[]) => this.shops = shops);
  }

}
