import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, Output, EventEmitter } from '@angular/core';
import { ICategory, IListItem, IQuantityType, ListItem, QuantityType } from "app/models";
import { CategoriesService } from "app/service/categories.service";
import { ListItemService } from "app/service/list-item.service";
import { Observable } from "rxjs/Observable";
import { QuantityTypesService } from "app/service/quantity-types.service";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-list-item-edit',
  templateUrl: './list-item-edit.component.html',
  styleUrls: ['./list-item-edit.component.css']
})
export class ListItemEditComponent implements OnChanges {

  @ViewChild("descriptionEl") descriptionElement;
  @Input() listItem: IListItem;
  @Output() onSave: EventEmitter<IListItem> = new EventEmitter;
  @Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  categories: ICategory[];
  quantityTypes: IQuantityType[];
  quantity: number;
  description: string;
  currentQuantityType: IQuantityType;

  constructor(
    private _categoryService: CategoriesService,
    private _quantityTypesServuce: QuantityTypesService,
    private _element: ElementRef
  ) { }

  ngOnInit() {
    this._categoryService.getAll()
      .subscribe((observer: ICategory[]) => { 
        this.categories = observer.sort(this.sortCategories); 
        this.ngOnChanges();
      }, 
      (error) => { console.error(error); });
    this._quantityTypesServuce.getAll()
      .subscribe((observer: IQuantityType[]) => {        
        this.quantityTypes = observer;
        this.ngOnChanges();
      }, 
      (error) => { console.error(error); });
  }

  ngOnChanges() {
    if(!this.listItem.category && this.categories) {
      this.listItem.category = this.categories.find((x) => true).$key;
    }
    if(!this.listItem.quantityType && this.quantityTypes) {
      this.onQuantityTypeChanged(this.quantityTypes.find((qt: IQuantityType) => qt.default).$key);      
    }
    this.quantity = this.listItem.quantity;
    this.description = this.listItem.description;
    this.descriptionElement.nativeElement.focus();
  }

  onTypeChanged($event): void {
    this.listItem.category = $event.srcElement.value;
  }

  onQuantityTypeChanged(typeId: string) {
    this.listItem.quantityType = typeId;
    this.currentQuantityType = this.quantityTypes.find((qt: IQuantityType) => qt.$key === this.listItem.quantityType);
  }

  onCancelClicked() {
    this.onCancel.emit();
  }

  onDeleteClicked() {
    if(this.listItem.$key){
      this.onDelete.emit(this.listItem.$key);
    }
  }

  save(): void {
    this.listItem.quantity = this.quantity;  
    this.listItem.description = this.description;
    if(this.validForm()) {
      this.onSave.emit(this.listItem);
    }
  }

  private validForm() {
    return this.listItem.description && this.listItem.quantity && this.listItem.category && this.listItem.quantityType;
  }

  private sortCategories(a: ICategory, b: ICategory) {
    return (a.name < b.name) ? -1 : 1;
  }

}
