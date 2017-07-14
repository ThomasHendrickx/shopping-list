import { Component, OnInit } from '@angular/core';
import { IQuantityType, QuantityType } from "app/models";
import { QuantityTypesService } from "app/service/quantity-types.service";

@Component({
  selector: 'app-quantity-types',
  templateUrl: './quantity-types.component.html',
  styleUrls: ['./quantity-types.component.css']
})
export class QuantityTypesComponent implements OnInit {

  qtypes;
  newLabel;

  constructor(
    private _quantityTypesService: QuantityTypesService
  ) { }

  ngOnInit() {
    this._quantityTypesService.getAll().subscribe((list: IQuantityType[])=> {
      this.qtypes = list.sort((a: IQuantityType, b: IQuantityType) => {
        if(a.label < b.label)
          return -1;
        return 1;
      })
    }); 
  }

  create($event) {
    var q = new QuantityType();
    q.label = this.newLabel;
    this._quantityTypesService.save(q);
    this.newLabel = "";
  }

}
