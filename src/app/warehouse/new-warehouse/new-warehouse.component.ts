import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Warehouse } from '../warehouse.model';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.scss']
})
export class NewWarehouseComponent implements OnInit {

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newWarehouse = new Warehouse(value.location, value.address, value.capacity, value.enabled, value.id)
    this.warehouseService.addWarehouse(newWarehouse)
    form.reset()
  }

}
