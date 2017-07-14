import { ICategory } from "app/models/category.model";

export interface IOrderedCategory {

    order: number;
    category: string;

}

export class OrderedCategory implements IOrderedCategory {

    order: number;
    category: string;

}