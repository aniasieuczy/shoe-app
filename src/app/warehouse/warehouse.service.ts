import { Warehouse } from "./warehouse.model";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class WarehouseService {
  warehouses: Warehouse[] = [
    new Warehouse('Warsaw', 'ul. Wspólna 2', 7000, true),
    new Warehouse("Łódź", 'ul. Stawki 2', 8000, true),
    new Warehouse("Łódź", 'ul. Stawki 2', 8000, true),
    new Warehouse("Łódź", 'ul. Stawki 2', 8000, true),
  ];

  getWarehouses() {
    return this.warehouses.slice();
  }


}
