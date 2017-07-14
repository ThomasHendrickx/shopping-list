import { IListItem } from "app/models/list-item.model";
import { IShop } from "app/models/shop.model";

export interface IList {

    $key: string;
    items: string[];
    done: boolean;
    shop: string; //The Id

}

export class List implements IList {

    $key: string;
    items: string[];
    done: boolean;
    shop: string;

    public static Empty(): IList {
        const list = new List();
        list.items = [];
        list.done = false;
        return list;
    }
}