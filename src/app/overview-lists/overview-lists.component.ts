import { Component, OnInit } from '@angular/core';
import { Instance } from "app/global.storage";
import { ListsService } from "app/service/lists.service";
import { IList, IShop } from "app/models";
import { ShopsService } from "app/service/shops.service";

@Component({
  selector: 'app-overview-lists',
  templateUrl: './overview-lists.component.html',
  styleUrls: ['./overview-lists.component.css']
})
export class OverviewListsComponent implements OnInit {

  lists: IList[];

  private shops: IShop[];

  constructor(
    private _listService: ListsService,
    private _shopService: ShopsService
  ) { }

  ngOnInit(): void {
    Instance.pushProperty("pagetitle","Lijstjes");
    this._listService.getAll().subscribe((lists: IList[]) => {
      this.lists = lists;
      this.lists.sort((a: IList, b: IList) => b.created - a.created);
    });
    this._shopService.getAll().subscribe((shops: IShop[]) => this.shops = shops);
  }

  getShopName($key: string): string {
    if(!this.shops || !this.shops.length) {
      return " - ";
    }
    const shop = this.shops.find((shop: IShop) => shop.$key === $key);
    return shop ? shop.name : " - ";
  }

}
