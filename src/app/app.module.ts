import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Select2Module } from 'ng2-select2';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireOfflineModule } from 'angularfire2-offline';
import { DragulaModule } from 'ng2-dragula';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavComponent } from './nav/top-nav/top-nav/top-nav.component';
import { ListComponent } from './list/list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { ListItemEditComponent } from './list/list-item-edit/list-item-edit.component';
import { ListTopControlComponent } from './list/list-top-control/list-top-control.component';
import { ListAddControlComponent } from './list/list-add-control/list-add-control.component';
import { ListBottomControlComponent } from './list/list-bottom-control/list-bottom-control.component';
import { ShopsService } from "app/service/shops.service";
import { ListsService } from "app/service/lists.service";

import { environment } from '../environments/environment';
import { ListItemService } from "app/service/list-item.service";
import { CategoriesService } from "app/service/categories.service";
import { QuantityTypesService } from "app/service/quantity-types.service";
import { CategoriesComponent } from './admin/categories/categories.component';
import { QuantityTypesComponent } from './admin/quantity-types/quantity-types.component';
import { ShopComponent } from './shop/shop.component';
import { ShopTopComponent } from './shop/shop-top/shop-top.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { OverviewListsComponent } from './overview-lists/overview-lists.component';
import { OverviewShopsComponent } from './overview-shops/overview-shops.component';

import { appRoutes } from 'app/routes';
import { AuthService } from "app/service/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ListComponent,
    ListItemComponent,
    ListItemEditComponent,
    ListTopControlComponent,
    ListAddControlComponent,
    ListBottomControlComponent,
    CategoriesComponent,
    QuantityTypesComponent,
    ShopComponent,
    ShopTopComponent,
    ShopListComponent,
    OverviewListsComponent,
    OverviewShopsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Select2Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireOfflineModule,
    DragulaModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ListsService,
    ShopsService,
    ListItemService,
    CategoriesService,
    QuantityTypesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
