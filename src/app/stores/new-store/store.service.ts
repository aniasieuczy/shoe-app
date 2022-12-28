import { Injectable } from "@angular/core";
import {Store} from "./store.model";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class StoreService {
  stores: Store[] = [
    // new Store("Warszawa", "Aleje Jerozolimskie", ['Kazar', 'Gino Rossi']),
    // new Store("Rzeszów", "3maja 50", ['Nike', 'Adidas'])
  ];
  storesChanged = new BehaviorSubject<Store[]>(JSON.parse(localStorage.getItem("store") || "[]"));

  getStores() {
    let localStorageData = JSON.parse(localStorage.getItem("store") || "[]");
  }

  addStore(store: Store) {
    this.stores = this.uploadFromLocalStorage();
    this.stores.push(store);
    console.log(this.stores.slice());
    const jsonData = JSON.stringify(this.stores);
    localStorage.setItem("store", jsonData);
    this.storesChanged.next([...this.stores]);
  }

  uploadFromLocalStorage() {
    let localStorageData = JSON.parse(localStorage.getItem("store") || "[]");
    return localStorageData;
  }

}
