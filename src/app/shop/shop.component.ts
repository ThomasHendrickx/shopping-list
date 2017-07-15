import { Component, OnInit, Input } from '@angular/core';
import { IShop, ICategory, IOrderedCategory, Shop } from "app/models";
import { ShopsService } from "app/service/shops.service";
import { CategoriesService } from "app/service/categories.service";
import { Instance } from "app/global.storage";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shopId: string = "-KorOdiVn0hovZIiesF_";
  shop: IShop;
  orderedCategories: ICategory[];
  loaded: boolean;
  
  private allCategories: ICategory[];
  

  constructor(
    private _shopService: ShopsService,
    private _categoryService: CategoriesService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {    
    Instance.pushProperty("pagetitle", "Winkel aanpassen");
    this._categoryService.getAll().subscribe((categories: ICategory[]) => {
      this.allCategories = categories;
      this.updateOrderedCategories();
    });
    this._route.params.subscribe(params => {
      const id = params['id'];
      if(id !== 'new') {
        this.shopId = id;
      }
      this.setupShop();
    });
  }

  private setupShop() {
    if(this.shopId) {
      this._shopService.get(this.shopId).subscribe((shop: IShop) => {
        this.shop = shop;
        this.updateOrderedCategories();
        this.loaded = true;
      });
    } else {
      this.shop = Shop.Empty();
      this.loaded = true;
    }
  }

  private updateOrderedCategories(): void {
    if(!this.shop || !this.allCategories)
    {
      return;
    }
    if(this.shop.categories.length === 0) 
    {
      for(var i = 0 ; i < this.allCategories.length ; i++ ) {
        this.shop.categories.push(this.allCategories[i].$key);
      }
    }

    this.orderedCategories = [];
    this.shop.categories.forEach((id: string) => {
      this.orderedCategories.push(this.allCategories.find((cat: ICategory) => cat.$key === id));
    });
  }

  onSave(name) {
    this.shop.name = name;
    this.shop.categories = this.orderedCategories.map((cat: ICategory) => cat.$key);
    this.shopId = this._shopService.save(this.shop);    
    this.shop.$key = this.shopId;
  }

  onOrderChanged($event): void {
    const oldIndex = this.orderedCategories
      .map((cat: ICategory) => cat.$key)
      .indexOf($event.moved);
    const movedCat = this.orderedCategories[oldIndex];
    this.orderedCategories.splice(oldIndex, 1);
    if($event.before === null) 
    {
      this.orderedCategories.push(movedCat);
    } 
    else
    {
      const beforeIndex = this.orderedCategories
        .map((cat: ICategory) => cat.$key)
        .indexOf($event.before);
      this.orderedCategories.splice(beforeIndex, 0, movedCat);
    }
  }

}
