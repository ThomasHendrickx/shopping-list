import { Component, OnInit } from '@angular/core';
import { Instance } from "app/global.storage";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  shopmodus: boolean;
  pagetitle: string;

  constructor() { }

  ngOnInit() {
    Instance.listenOnProperty("shopmodus").subscribe((shopmodus: boolean) => this.shopmodus = shopmodus);
    Instance.listenOnProperty("pagetitle").subscribe((pagetitle: string) => this.pagetitle = pagetitle);
  }

}
