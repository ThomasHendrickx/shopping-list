import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "app/service/categories.service";
import { Category, ICategory } from "app/models";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories;
  newLabel;

  constructor(
    private _categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this._categoriesService.getAll().subscribe((list: ICategory[])=> {
      this.categories = list.sort((a: ICategory, b: ICategory) => {
        if(a.name < b.name)
          return -1;
        return 1;
      })
    }); 
  }

  create($event) {
    var cat = new Category();
    cat.name = this.newLabel;
    this._categoriesService.save(cat);
    this.newLabel = "";
  }

}
