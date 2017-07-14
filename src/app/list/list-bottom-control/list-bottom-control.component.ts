import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-bottom-control',
  templateUrl: './list-bottom-control.component.html',
  styleUrls: ['./list-bottom-control.component.css']
})
export class ListBottomControlComponent implements OnInit {

  @Output() onShopModusSet: EventEmitter<boolean> = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  onShopBtnClicked() {
    this.onShopModusSet.emit(false);
  }
}
