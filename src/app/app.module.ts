import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseListComponent } from './warehouse/warehouse-list/warehouse-list.component';
import { NewWarehouseComponent } from './warehouse/new-warehouse/new-warehouse.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WarehouseComponent,
    WarehouseListComponent,
    NewWarehouseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
