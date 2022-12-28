import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseListComponent } from './warehouse/warehouse-list/warehouse-list.component';
import { NewWarehouseComponent } from './warehouse/new-warehouse/new-warehouse.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoresComponent } from './stores/stores.component';
import { NewStoreComponent } from './stores/new-store/new-store.component';
import { ShopsListComponent } from './stores/shops-list/shops-list.component';
import { TooltipComponent } from './shared/tooltip/tooltip.component';
import { MaterialCheckboxesComponent } from './material-checkboxes/material-checkboxes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WarehouseComponent,
    WarehouseListComponent,
    NewWarehouseComponent,
    DashboardComponent,
    StoresComponent,
    NewStoreComponent,
    ShopsListComponent,
    TooltipComponent,
    MaterialCheckboxesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
