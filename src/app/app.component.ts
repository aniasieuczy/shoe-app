import { Component } from '@angular/core';
import { WarehouseComponent } from "./warehouse/warehouse.component";
import { WarehouseService } from "./warehouse/warehouse.service";
import  { Warehouse } from "./warehouse/warehouse.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoes-store';
}
