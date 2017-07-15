import { Routes } from '@angular/router';
import { OverviewListsComponent } from "app/overview-lists/overview-lists.component";
import { OverviewShopsComponent } from "app/overview-shops/overview-shops.component";
import { ListComponent } from "app/list/list/list.component";
import { ShopComponent } from "app/shop/shop.component";

export const appRoutes: Routes = [
    { path: 'lists', component: OverviewListsComponent },
    { path: 'shops', component: OverviewShopsComponent },
    { path: 'list/new', component: ListComponent },
    { path: 'list/:id', component: ListComponent },
    { path: 'shop/new', component: ShopComponent },
    { path: 'shop/:id', component: ShopComponent },
    { path: '**' , redirectTo: 'lists' }
];