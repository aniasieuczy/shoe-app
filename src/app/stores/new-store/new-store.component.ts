import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {Store} from "./store.model";
import {StoreService} from "./store.service";

export interface IBrands {
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-new-store',
  templateUrl: 'new-store.component.html',
  styleUrls: ['./new-store.component.scss']
})
export class NewStoreComponent implements OnInit {
  stores: Store [];
  newStoreForm: FormGroup;
  allSelected = false;
  Data: Array<any> = [
    {name: 'Kazar', value: 'Kazar'},
    {name: 'Gino Rossi', value: 'Gino Rossi'},
    {name: 'Ecco', value: 'Ecco'},
    {name: 'Geox', value: 'Geox'},
    {name: 'Nike', value: 'Nike'},
    {name: 'Wojas', value: 'Wojas'},
    {name: 'Ryłko', value: 'Ryłko'},
    {name: '4F', value: '4F'},
    {name: 'Adidas', value: 'Adidas'}
  ];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.newStoreForm = new FormGroup({
      'location': new FormControl(null),
      'address': new FormControl(null),
      'brands': new FormArray([])
    })
    this.storeService.storesChanged.subscribe(
      (stores: Store[]) => {
        this.stores = stores;
      }
    )

    console.log(this.storeService.getStores());
  }

  onSubmit() {
    const newStore =  new Store(this.newStoreForm.value['location'], this.newStoreForm.value['address'], this.newStoreForm.value['brands']);
    console.log('new Store ' + newStore.location);
    this.storeService.addStore(newStore);
    // (this.newStoreForm.get('brands') as FormArray).clear();
    this.newStoreForm.reset();
  }

  checkUncheckAll(evt: any) {
    this.Data.forEach((check) => check.checked = evt.target.checked)
  }
  isAllSelected(evt: any, index: number) {
    this.Data[index].checked = evt.target.checked;
    this.allSelected = this.Data.every((item) => item.checked == true);
    this.onCheckboxChange(evt);
  }

  onCheckboxChange(event: any) {
    const brands: FormArray = this.newStoreForm.get('brands') as FormArray;
    if(event.target.checked) {
      brands.push(new FormControl(event.target.value));
      // console.log("controls " + event.target.value);
    }
  }

  onSelectAll() {
    console.log("All was clicked");
  }

}
