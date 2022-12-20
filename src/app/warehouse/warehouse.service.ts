import { Warehouse } from "./warehouse.model";
import {Injectable} from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: "root"})
export class WarehouseService {

  warehouses: Warehouse[] = [
    // new Warehouse('Warsaw', 'ul. Wspólna 2', 7000, true, 1),
    // new Warehouse("Łódź", 'ul. Stawki 2', 8000, true, 2),
    // new Warehouse("Łódź", 'ul. Stawki 2', 8000, true, 3),
    // new Warehouse("Łódź", 'ul. Stawki 2', 8000, true, 4),
  ];

  warehousesChanged = new BehaviorSubject<Warehouse[]>(JSON.parse(localStorage.getItem("id") || "[]"))

  getWarehouses() {
    return JSON.parse(localStorage.getItem("id") || "[]");

  }

  addWarehouse(warehouse: Warehouse){
      this.warehouses = this.uploadFromLocalStorage()
      this.warehouses.push(warehouse);
      const jsonData = JSON.stringify(this.warehouses);
      localStorage.setItem("id", jsonData);;
      this.warehousesChanged.next(this.warehouses.slice())
  }

    uploadFromLocalStorage() {
      let localStorageData = JSON.parse(localStorage.getItem("id") || "[]");
      console.log(localStorageData);
      return localStorageData;
  }


  }



