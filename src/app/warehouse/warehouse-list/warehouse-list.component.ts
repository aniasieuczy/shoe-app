import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../warehouse.model';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  warehouses: Warehouse[] = [] ;

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.warehouses = this.warehouseService.getWarehouses();
    console.log(this.warehouses);
    this.warehouseService.warehousesChanged
    .subscribe(
      (warehouses: Warehouse[]) =>
      this.warehouses = warehouses
    )
  }


}
