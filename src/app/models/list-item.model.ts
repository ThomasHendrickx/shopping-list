import { ICategory } from "app/models/category.model";

export interface IListItem {

    $key: string;
    listId: string;
    description: string,
    category: string;
    quantity: number;
    quantityType: string;
    crossed: boolean;

}

export interface IQuantityType {

    $key: string;
    label: string;
    default: boolean;

}

export class QuantityType implements IQuantityType {
    
    $key: string;
    label: string;
    default: boolean;

}

export class ListItem implements IListItem {

    $key: string;
    listId: string;
    description: string;
    category: string;
    quantity: number;
    quantityType: string;
    crossed: boolean;

    public static Empty(): IListItem {
        return new ListItem();
    }

}
