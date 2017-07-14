import { IOrderedCategory } from "app/models/ordered-category.model";

export interface IShop {

  $key: string;
  name: string;
  categories: string[];

}

export class Shop implements IShop {

    $key: string;
    name: string;
    categories: string[];

    public static Empty(): IShop{
      const shop = new Shop();
      shop.name = "";
      shop.categories = [];
      return shop;
    }

}