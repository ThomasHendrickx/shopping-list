import { IListItem } from "app/models/list-item.model";
import { IShop } from "app/models/shop.model";

export interface IList {

    $key: string;
    items: string[];
    done: boolean;
    shop: string; //The Id
    created: number;

}

export class List implements IList {

    $key: string;
    items: string[];
    done: boolean;
    shop: string;
    created: number;

    public static Empty(): IList {
        const list = new List();
        list.items = [];
        list.done = false;
        list.created = Date.now();
        return list;
    }
}