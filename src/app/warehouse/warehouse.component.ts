import { Component, OnInit } from '@angular/core';
import { WarehouseService } from "./warehouse.service";
import { Warehouse } from "./warehouse.model";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.warehouses = this.warehouseService.getWarehouses();
    console.log(this.warehouses);
  }

}
