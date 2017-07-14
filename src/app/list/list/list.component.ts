import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { IList, IListItem, IShop, List, ListItem, IQuantityType } from "app/models";
import { ShopsService } from "app/service/shops.service";
import { ListsService } from "app/service/lists.service";
import { ListItemService } from "app/service/list-item.service";
import { ModalDirective } from "ngx-bootstrap/modal";
import { QuantityTypesService } from "app/service/quantity-types.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() listId: string;
  @ViewChild('createModal') public el: ModalDirective;

  qtTypes: IQuantityType[];
  availableShops: IShop[];
  currentList: IList;
  items: IListItem[] = [];
  selectedListItem: IListItem;

  shopmodus: boolean;

  constructor(
    private _shopService: ShopsService,
    private _listService: ListsService,
    private _listItemService: ListItemService,
    private _qtService: QuantityTypesService
  ) { }
 
  ngOnInit() {
    this._shopService.getAll().subscribe((shops: IShop[]) => {
      this.availableShops = shops;
    });    
    this._qtService.getAll().subscribe((qt: IQuantityType[]) => {
      this.qtTypes = qt;
      this.sortItems();
    });
    if(!this.listId) {
      this.currentList = List.Empty();
      this.listId = this._listService.save(this.currentList);
    }
    this._listService.get(this.listId).subscribe((list: IList) => {
      this.currentList = list;
    });
    if(this.currentList.items && this.currentList.items.length) {
      this.currentList.items.forEach(($key: string) => {
        this.getItem($key);
      });
    }
  }

  onShopChanged($key: string) {
    this.currentList.shop = $key;
  }

  setShopModus(shopmodus: boolean) {
    this.shopmodus = shopmodus;
  }

  onListItemSaved(listItem: IListItem) {
    this.onHideModal();
    listItem.listId = this.currentList.$key;
    const $key = this._listItemService.save(listItem);
    if(!this.currentList.items) {
      this.currentList.items = [];
    }
    if(this.currentList.items.indexOf($key) < 0) {
      this.currentList.items.push($key);
      this.getItem($key);
    }    
  }

  onListItemDelete(listItemKey: string) {
    this._listItemService.delete(listItemKey);
    this.currentList.items.splice(this.currentList.items.indexOf(listItemKey), 1);
    this.items = this.items.filter((item: IListItem) => item.$key !== listItemKey);
    this.onHideModal();
  }

  getQuantityLabel($key: string) {
    if(!this.qtTypes || !this.qtTypes.length){
      return "";
    }
    const qt = this.qtTypes.find((qt: IQuantityType) => qt.$key === $key);
    return qt ? qt.label : "";
  }

  onShowModal() {
    this.selectedListItem = ListItem.Empty();
    this.el.show();
  }

  onHideModal() {
    this.el.hide();
  }

  onItemClick($key: string) {
    if(this.shopmodus) {
      const item = this.items.find((li: IListItem) => li.$key === $key);
      item.crossed = !item.crossed;
      this._listItemService.save(item);
    } else {    
      this.selectedListItem = this.items.find((li: IListItem) => li.$key === $key);
      this.el.show();
    }
  }



  private getItem($key: string) {
    this._listItemService.get($key).subscribe((item: IListItem) => {
      const index = this.items.map((i: IListItem) => i.$key).indexOf(item.$key);
      if(index < 0) {
        this.items.push(item);
      } else {
        this.items[index] = item;
      }
      this.sortItems();
    });
  }

  private sortItems() {
    const currentShop = this.availableShops.find((shop: IShop) => shop.$key === this.currentList.shop);
    if(!currentShop || !this.items || !this.items.length) {
      return;
    }
    const sortedList = [];
    currentShop.categories.forEach((catKey: string) => {
      sortedList.push.apply(sortedList, this.items.filter((item: IListItem) => item.category === catKey));
    });
    this.items = sortedList;
  }

}
